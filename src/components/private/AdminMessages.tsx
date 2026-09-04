import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
  replied_at: string | null;
  reply_message: string | null;
  client_id: string | null;
};

type Client = { id: string; full_name: string | null; email: string | null };

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const fieldClass =
  "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground";

const AdminMessages = ({ clients }: { clients: Client[] }) => {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState<string | null>(null);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [granting, setGranting] = useState<string | null>(null);

  const grant = async (s: Submission) => {
    setGranting(s.id);
    const { data, error } = await supabase.functions.invoke("client-admin", {
      body: { action: "grant_access", email: s.email, name: s.name, days: 7 },
    });
    setGranting(null);
    if (error || (data as { error?: string })?.error) {
      toast.error("The access key could not be sent.");
      return;
    }
    toast.success(`Access link sent to ${s.email}.`);
  };

  const load = async () => {
    const { data } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    setItems((data as Submission[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const send = async (id: string) => {
    if (reply.trim().length < 1) {
      toast.error("A reply is required.");
      return;
    }
    setSending(true);
    const { data, error } = await supabase.functions.invoke("reply-contact", {
      body: { submission_id: id, reply: reply.trim() },
    });
    setSending(false);
    if (error || (data as { error?: string })?.error) {
      toast.error("The reply could not be sent.");
      return;
    }
    toast.success("Reply sent.");
    setReply("");
    setOpenId(null);
    void load();
  };

  const attach = async (id: string, clientId: string) => {
    const { error } = await supabase
      .from("contact_submissions")
      .update({ client_id: clientId || null })
      .eq("id", id);
    if (error) {
      toast.error("The message could not be linked.");
      return;
    }
    toast.success("Message linked to a client.");
    void load();
  };

  const remove = async (id: string) => {
    const { data, error } = await supabase.functions.invoke("client-admin", {
      body: { action: "delete_message", message_id: id },
    });
    const failure = error?.message ?? (data as { error?: string } | null)?.error;
    if (failure) {
      toast.error(`The message could not be removed. ${failure}`);
      return;
    }
    setItems((prev) => prev.filter((s) => s.id !== id));
    void load();
  };

  if (loading) {
    return <p className="mt-8 text-sm text-muted-foreground">Loading</p>;
  }

  return (
    <section>
      <h2 className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">
        Messages
      </h2>
      {items.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">No message received.</p>
      ) : (
        <ul className="mt-8 divide-y divide-border border-t border-border">
          {items.map((s) => (
            <li key={s.id} className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="max-w-xl">
                  <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">
                    {formatDateTime(s.created_at)} · {s.status}
                  </p>
                  <p className="mt-2 text-base font-light tracking-[0.1em]">{s.name}</p>
                  <p className="mt-1 text-xs tracking-[0.15em] text-muted-foreground">
                    {s.email}
                  </p>
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed">
                    {s.message}
                  </p>
                  {s.reply_message && (
                    <p className="mt-4 whitespace-pre-wrap border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground">
                      {s.reply_message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenId(openId === s.id ? null : s.id);
                      setReply("");
                    }}
                    className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {openId === s.id ? "Close" : "Reply"}
                  </button>
                  <button
                    type="button"
                    disabled={granting === s.id}
                    onClick={() => grant(s)}
                    className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
                  >
                    {granting === s.id ? "Sending" : "Send access key"}
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(s.id)}
                    className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="mt-6 max-w-sm">
                <label
                  className="block text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground"
                  htmlFor={`link-${s.id}`}
                >
                  Linked client
                </label>
                <select
                  id={`link-${s.id}`}
                  value={s.client_id ?? ""}
                  onChange={(e) => attach(s.id, e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select a client</option>
                  {clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.full_name || c.email}
                    </option>
                  ))}
                </select>
              </div>

              {openId === s.id && (
                <div className="mt-6 max-w-xl">
                  <textarea
                    rows={5}
                    maxLength={5000}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Reply, sent from richard@makil.fr"
                    className={`${fieldClass} resize-none`}
                  />
                  <button
                    type="button"
                    disabled={sending}
                    onClick={() => send(s.id)}
                    className="mt-6 border border-foreground px-10 py-4 text-[0.6rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
                  >
                    {sending ? "Sending" : "Send reply"}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AdminMessages;
