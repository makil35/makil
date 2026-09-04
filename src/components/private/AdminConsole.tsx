import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { STATUSES, formatDate, type Mandate } from "./ClientMandates";
import AdminMessages from "./AdminMessages";
import AdminSignals from "./AdminSignals";

type Client = {
  id: string;
  full_name: string | null;
  email: string | null;
};

const emptyDraft = {
  client_id: "",
  reference: "",
  title: "",
  status: "open",
  opened_on: new Date().toISOString().slice(0, 10),
  expected_on: "",
  closed_on: "",
  summary: "",
};

const fieldClass =
  "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground";
const labelClass =
  "block text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground";

const AdminConsole = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [mandates, setMandates] = useState<Mandate[]>([]);
  const [loading, setLoading] = useState(true);

  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName] = useState("");
  const [inviting, setInviting] = useState(false);

  const [draft, setDraft] = useState({ ...emptyDraft });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const [{ data: c }, { data: m }] = await Promise.all([
      supabase.from("profiles").select("id, full_name, email").order("created_at"),
      supabase.from("mandates").select("*").order("opened_on", { ascending: false }),
    ]);
    setClients((c as Client[]) ?? []);
    setMandates((m as Mandate[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const invite = async (e: React.FormEvent) => {
    e.preventDefault();
    setInviting(true);
    const { data, error } = await supabase.functions.invoke("client-admin", {
      body: {
        action: "invite",
        email: inviteEmail,
        full_name: inviteName,
        redirect_to: `${window.location.origin}/private`,
      },
    });
    setInviting(false);
    if (error || data?.error) {
      toast.error("The invitation could not be sent.");
      return;
    }
    toast.success("Invitation sent.");
    setInviteEmail("");
    setInviteName("");
    void load();
  };

  const clientName = (id: string) => {
    const c = clients.find((x) => x.id === id);
    return c?.full_name || c?.email || "Unknown";
  };

  const startEdit = (m: Mandate) => {
    setEditingId(m.id);
    setDraft({
      client_id: m.client_id,
      reference: m.reference ?? "",
      title: m.title,
      status: m.status,
      opened_on: m.opened_on,
      expected_on: m.expected_on ?? "",
      closed_on: m.closed_on ?? "",
      summary: m.summary ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.client_id || !draft.title.trim()) {
      toast.error("A client and a title are required.");
      return;
    }
    setSaving(true);
    const payload = {
      client_id: draft.client_id,
      reference: draft.reference.trim() || null,
      title: draft.title.trim().slice(0, 160),
      status: draft.status,
      opened_on: draft.opened_on || new Date().toISOString().slice(0, 10),
      expected_on: draft.expected_on || null,
      closed_on: draft.closed_on || null,
      summary: draft.summary.trim().slice(0, 2000) || null,
    };
    const { error } = editingId
      ? await supabase.from("mandates").update(payload).eq("id", editingId)
      : await supabase.from("mandates").insert(payload);
    setSaving(false);
    if (error) {
      toast.error("The mandate could not be saved.");
      return;
    }
    toast.success(editingId ? "Mandate updated." : "Mandate created.");
    setDraft({ ...emptyDraft });
    setEditingId(null);
    void load();
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from("mandates").delete().eq("id", id);
    if (error) {
      toast.error("The mandate could not be removed.");
      return;
    }
    toast.success("Mandate removed.");
    void load();
  };

  if (loading) {
    return <p className="mt-16 text-sm text-muted-foreground">Loading</p>;
  }

  return (
    <div className="mt-16 space-y-24">
      <AdminSignals />
      <section>
        <h2 className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">
          {editingId ? "Edit mandate" : "New mandate"}
        </h2>
        <form onSubmit={save} className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="m-client">Client</label>
            <select
              id="m-client"
              value={draft.client_id}
              onChange={(e) => setDraft({ ...draft, client_id: e.target.value })}
              className={fieldClass}
            >
              <option value="">—</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.full_name || c.email}
                </option>
              ))}
            </select>
            {clients.length <= 1 && (
              <p className="mt-3 text-xs text-muted-foreground">
                No client yet.{" "}
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("clients-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Invite a client
                </button>{" "}
                first. They will then appear in this list.
              </p>
            )}
          </div>
          <div>
            <label className={labelClass} htmlFor="m-ref">Reference</label>
            <input
              id="m-ref"
              value={draft.reference}
              maxLength={40}
              onChange={(e) => setDraft({ ...draft, reference: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="m-title">Title</label>
            <input
              id="m-title"
              value={draft.title}
              maxLength={160}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="m-status">Status</label>
            <select
              id="m-status"
              value={draft.status}
              onChange={(e) => setDraft({ ...draft, status: e.target.value })}
              className={fieldClass}
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="m-opened">Opened</label>
            <input
              id="m-opened"
              type="date"
              value={draft.opened_on}
              onChange={(e) => setDraft({ ...draft, opened_on: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="m-expected">Expected</label>
            <input
              id="m-expected"
              type="date"
              value={draft.expected_on}
              onChange={(e) => setDraft({ ...draft, expected_on: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="m-closed">Closed</label>
            <input
              id="m-closed"
              type="date"
              value={draft.closed_on}
              onChange={(e) => setDraft({ ...draft, closed_on: e.target.value })}
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="m-summary">Summary</label>
            <textarea
              id="m-summary"
              rows={3}
              maxLength={2000}
              value={draft.summary}
              onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
              className={`${fieldClass} resize-none`}
            />
          </div>
          <div className="flex gap-6 sm:col-span-2">
            <button
              type="submit"
              disabled={saving}
              className="border border-foreground px-10 py-4 text-[0.6rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
            >
              {saving ? "Saving" : editingId ? "Update" : "Create"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setDraft({ ...emptyDraft });
                }}
                className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">
          Mandates
        </h2>
        {mandates.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">No mandate recorded.</p>
        ) : (
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {mandates.map((m) => (
              <li key={m.id} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">
                      {clientName(m.client_id)} · {m.status}
                    </p>
                    <p className="mt-2 text-base font-light tracking-[0.1em]">
                      {m.reference ? `${m.reference}. ` : ""}
                      {m.title}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {formatDate(m.opened_on)} → {formatDate(m.closed_on)}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <button
                      type="button"
                      onClick={() => startEdit(m)}
                      className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(m.id)}
                      className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <AdminMessages clients={clients} />

      <section id="clients-section">
        <h2 className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">
          Clients
        </h2>
        <form onSubmit={invite} className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="c-name">Name</label>
            <input
              id="c-name"
              value={inviteName}
              maxLength={120}
              onChange={(e) => setInviteName(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="c-email">Email</label>
            <input
              id="c-email"
              type="email"
              required
              maxLength={255}
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={inviting}
              className="border border-foreground px-10 py-4 text-[0.6rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
            >
              {inviting ? "Sending" : "Invite client"}
            </button>
          </div>
        </form>
        <ul className="mt-10 divide-y divide-border border-t border-border">
          {clients.map((c) => (
            <li key={c.id} className="flex flex-wrap items-baseline justify-between gap-4 py-4">
              <p className="text-sm tracking-[0.1em]">{c.full_name || "Unnamed"}</p>
              <p className="text-xs tracking-[0.15em] text-muted-foreground">{c.email}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminConsole;
