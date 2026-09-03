import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
  const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const authHeader = req.headers.get("Authorization") ?? "";
  if (!authHeader) return json({ error: "Unauthorized" }, 401);

  const asUser = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });
  const admin = createClient(SUPABASE_URL, SERVICE_KEY);

  const { data: userData } = await asUser.auth.getUser();
  const user = userData?.user;
  if (!user) return json({ error: "Unauthorized" }, 401);

  const { data: isAdmin } = await admin.rpc("has_role", {
    _user_id: user.id,
    _role: "admin",
  });
  if (!isAdmin) return json({ error: "Forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const action = String(body.action ?? "");

  try {
    if (action === "invite") {
      const email = String(body.email ?? "").trim().toLowerCase();
      const fullName = String(body.full_name ?? "").trim().slice(0, 120);
      const redirectTo = String(body.redirect_to ?? "").trim();

      if (!email || email.length > 255 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return json({ error: "Invalid email" }, 400);
      }

      // Find an existing account for this address, otherwise invite a new one.
      const { data: list } = await admin.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });
      let target = list?.users?.find(
        (u) => (u.email ?? "").toLowerCase() === email,
      );

      if (!target) {
        const { data: invited, error: inviteError } =
          await admin.auth.admin.inviteUserByEmail(email, {
            data: { full_name: fullName },
            redirectTo: redirectTo || undefined,
          });
        if (inviteError) return json({ error: inviteError.message }, 400);
        target = invited.user ?? undefined;
      } else {
        const { error: linkError } = await admin.auth.admin.generateLink({
          type: "magiclink",
          email,
          options: { redirectTo: redirectTo || undefined },
        });
        if (linkError) return json({ error: linkError.message }, 400);
      }

      if (!target) return json({ error: "Invitation failed" }, 400);

      const { error: profileError } = await admin.from("profiles").upsert(
        {
          id: target.id,
          email,
          full_name: fullName || null,
        },
        { onConflict: "id" },
      );
      if (profileError) return json({ error: profileError.message }, 400);

      return json({ success: true, client_id: target.id });
    }

    if (action === "remove") {
      const clientId = String(body.client_id ?? "");
      if (!/^[0-9a-f-]{36}$/i.test(clientId)) {
        return json({ error: "Invalid client" }, 400);
      }
      if (clientId === user.id) {
        return json({ error: "You cannot remove your own account" }, 400);
      }
      const { error } = await admin.auth.admin.deleteUser(clientId);
      if (error) return json({ error: error.message }, 400);
      return json({ success: true });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Unexpected error" }, 500);
  }
});
