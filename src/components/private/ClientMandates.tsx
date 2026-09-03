import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Mandate = {
  id: string;
  client_id: string;
  reference: string | null;
  title: string;
  status: string;
  opened_on: string;
  expected_on: string | null;
  closed_on: string | null;
  summary: string | null;
};

export const STATUSES = ["open", "in progress", "on hold", "closed"] as const;

export const formatDate = (value: string | null) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "—";

const ClientMandates = ({ userId }: { userId: string }) => {
  const [mandates, setMandates] = useState<Mandate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    supabase
      .from("mandates")
      .select("*")
      .eq("client_id", userId)
      .order("opened_on", { ascending: false })
      .then(({ data }) => {
        if (!active) return;
        setMandates((data as Mandate[]) ?? []);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [userId]);

  if (loading) {
    return <p className="mt-16 text-sm text-muted-foreground">Loading</p>;
  }

  if (mandates.length === 0) {
    return (
      <p className="mt-16 text-sm leading-relaxed text-muted-foreground">
        No mandate is open under your name at this time.
      </p>
    );
  }

  return (
    <ul className="mt-16 space-y-16">
      {mandates.map((m) => (
        <li key={m.id}>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
              {m.reference ?? "Mandate"}
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
              {m.status}
            </p>
          </div>
          <h2 className="mt-4 text-xl font-light tracking-[0.15em]">{m.title}</h2>
          {m.summary && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {m.summary}
            </p>
          )}
          <dl className="mt-6 grid grid-cols-1 gap-4 text-xs tracking-[0.15em] text-muted-foreground sm:grid-cols-3">
            <div>
              <dt className="text-[0.55rem] uppercase tracking-[0.4em]">Opened</dt>
              <dd className="mt-2">{formatDate(m.opened_on)}</dd>
            </div>
            <div>
              <dt className="text-[0.55rem] uppercase tracking-[0.4em]">Expected</dt>
              <dd className="mt-2">{formatDate(m.expected_on)}</dd>
            </div>
            <div>
              <dt className="text-[0.55rem] uppercase tracking-[0.4em]">Closed</dt>
              <dd className="mt-2">{formatDate(m.closed_on)}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
};

export default ClientMandates;
