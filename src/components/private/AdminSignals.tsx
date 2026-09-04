import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Row = { event: string; path: string | null; referrer: string | null; session_id: string | null; created_at: string };

const LABELS: Record<string, string> = {
  page_view: "Pages viewed",
  contact_form_sent: "Messages sent",
  email_click: "Email opened",
  key_requested: "Keys requested",
  key_granted: "Keys accepted",
  journal_read: "Journal notes read",
  private_area_opened: "Private area opened",
};

const CONVERSIONS = ["contact_form_sent", "email_click", "key_requested", "key_granted"];

const RANGES = [
  { label: "7 days", days: 7 },
  { label: "30 days", days: 30 },
  { label: "90 days", days: 90 },
];

const AdminSignals = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    const since = new Date(Date.now() - days * 86400000).toISOString();
    void supabase
      .from("site_events")
      .select("event, path, referrer, session_id, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(5000)
      .then(({ data }) => {
        if (!active) return;
        setRows((data as Row[]) ?? []);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [days]);

  const count = (event: string) => rows.filter((r) => r.event === event).length;
  const visitors = new Set(rows.map((r) => r.session_id).filter(Boolean)).size;
  const conversions = rows.filter((r) => CONVERSIONS.includes(r.event)).length;
  const rate = visitors ? Math.round((conversions / visitors) * 1000) / 10 : 0;

  const group = (key: "path" | "referrer") => {
    const map = new Map<string, number>();
    rows
      .filter((r) => (key === "path" ? r.event === "page_view" : true))
      .forEach((r) => {
        const value = r[key];
        if (!value) return;
        map.set(value, (map.get(value) ?? 0) + 1);
      });
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  };

  return (
    <section>
      <div className="flex flex-wrap items-baseline justify-between gap-6">
        <h2 className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">Signals</h2>
        <div className="flex gap-6">
          {RANGES.map((r) => (
            <button
              key={r.days}
              type="button"
              onClick={() => setDays(r.days)}
              className={`text-[0.55rem] uppercase tracking-[0.4em] transition-colors ${
                days === r.days ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-muted-foreground">Loading</p>
      ) : rows.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">No activity recorded over this period.</p>
      ) : (
        <>
          <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">Visitors</p>
              <p className="mt-3 font-display text-3xl font-light">{visitors}</p>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">Conversions</p>
              <p className="mt-3 font-display text-3xl font-light">{conversions}</p>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">Rate</p>
              <p className="mt-3 font-display text-3xl font-light">{rate}%</p>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">Pages viewed</p>
              <p className="mt-3 font-display text-3xl font-light">{count("page_view")}</p>
            </div>
          </div>

          <ul className="mt-12 divide-y divide-border border-t border-border">
            {Object.keys(LABELS)
              .filter((k) => k !== "page_view")
              .map((k) => (
                <li key={k} className="flex items-baseline justify-between py-4">
                  <span className="text-sm font-light tracking-[0.08em]">{LABELS[k]}</span>
                  <span className="text-sm text-muted-foreground">{count(k)}</span>
                </li>
              ))}
          </ul>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">Most read pages</p>
              <ul className="mt-6 space-y-3">
                {group("path").map(([value, n]) => (
                  <li key={value} className="flex items-baseline justify-between gap-6">
                    <span className="truncate text-sm">{value}</span>
                    <span className="text-sm text-muted-foreground">{n}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground">Arriving from</p>
              {group("referrer").length === 0 ? (
                <p className="mt-6 text-sm text-muted-foreground">Direct visits only.</p>
              ) : (
                <ul className="mt-6 space-y-3">
                  {group("referrer").map(([value, n]) => (
                    <li key={value} className="flex items-baseline justify-between gap-6">
                      <span className="truncate text-sm">{value}</span>
                      <span className="text-sm text-muted-foreground">{n}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AdminSignals;
