import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import ClientMandates from "@/components/private/ClientMandates";
import AdminConsole from "@/components/private/AdminConsole";

const Private = () => {
  useSeo({
    title: "Private area | MAKIL",
    description: "Private area reserved for clients of the house.",
    noindex: true,
  });

  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setIsAdmin(false);
      return;
    }
    let active = true;
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => {
        if (active) setIsAdmin(Boolean(data));
      });
    return () => {
      active = false;
    };
  }, [session?.user?.id]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    const { error: err } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/private`,
      },
    });
    setSending(false);
    if (err) {
      setError("This address is not registered with the house.");
      return;
    }
    setSent(true);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto w-full max-w-4xl px-6 pb-32 pt-40">
        <p className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">
          Private area
        </p>
        <h1 className="mt-8 text-3xl font-light tracking-[0.25em]">Mandates</h1>

        {!ready ? (
          <p className="mt-16 text-sm text-muted-foreground">Loading</p>
        ) : !session ? (
          <div className="mt-16 max-w-md">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This area is reserved for those already known to the house. You will find
              here the mandates opened in your name, their state, and the dates that
              matter — nothing else, and nothing visible to anyone but you.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Enter the address known to me and a single-use link will be sent to you.
              No password is kept, here or elsewhere.
            </p>

            {sent ? (
              <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
                A link has been sent. It opens this page, once.
              </p>
            ) : (
              <form onSubmit={signIn} className="mt-10 space-y-6">
                <div>
                  <label
                    htmlFor="private-email"
                    className="block text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="private-email"
                    type="email"
                    required
                    maxLength={255}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                {error && (
                  <p className="text-xs tracking-wide text-muted-foreground">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full border border-foreground py-4 text-[0.65rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
                >
                  {sending ? "Sending" : "Send link"}
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="mt-16">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-4">
              <p className="text-xs tracking-[0.2em] text-muted-foreground">
                {session.user.email}
              </p>
              <button
                type="button"
                onClick={signOut}
                className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign out
              </button>
            </div>
            {isAdmin ? (
              <AdminConsole />
            ) : (
              <ClientMandates userId={session.user.id} />
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Private;
