import { useEffect, useMemo, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "makil.access.token";

// Gate active — the house is entered by key only.
const GATE_PAUSED = false;

// Search and AI crawlers must be able to read the public pages, otherwise
// makil.fr cannot be indexed at all. They see the site; they cannot act on it.
const CRAWLER_UA =
  /(googlebot|google-inspectiontool|bingbot|duckduckbot|yandex(bot)?|baiduspider|slurp|applebot|petalbot|linkedinbot|twitterbot|facebookexternalhit|whatsapp|telegrambot|discordbot|embedly|slackbot|pinterest|gptbot|oai-searchbot|chatgpt-user|perplexitybot|claudebot|anthropic-ai|ccbot|google-extended|lighthouse|pagespeed)/i;

const isCrawler = () =>
  typeof navigator !== "undefined" && CRAWLER_UA.test(navigator.userAgent);

type Status = "checking" | "locked" | "granted";

const AccessGate = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<Status>("checking");
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [mode, setMode] = useState<"key" | "request">("key");

  // Request form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const startedAt = useMemo(() => Date.now(), []);

  useEffect(() => {
    let active = true;
    if (isCrawler()) {
      setStatus("granted");
      return;
    }

    // A personal invitation link carries its own signed token.
    const params = new URLSearchParams(window.location.search);
    const invited = params.get("access");
    if (invited) {
      params.delete("access");
      const rest = params.toString();
      window.history.replaceState(
        {},
        "",
        window.location.pathname + (rest ? `?${rest}` : "") + window.location.hash,
      );
    }

    const token = invited || localStorage.getItem(STORAGE_KEY);
    if (!token) {
      setStatus("locked");
      return;
    }
    supabase.functions
      .invoke("access-gate", { body: { action: "validate", token } })
      .then(({ data, error: err }) => {
        if (!active) return;
        if (!err && data?.valid) {
          localStorage.setItem(STORAGE_KEY, token);
          if (invited) trackEvent("key_granted");
          setStatus("granted");
        } else {
          localStorage.removeItem(STORAGE_KEY);
          setStatus("locked");
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const submitKey = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { data, error: err } = await supabase.functions.invoke("access-gate", {
      body: { action: "verify", key },
    });
    setSubmitting(false);
    if (err || !data?.valid) {
      setError("This key is not recognised.");
      return;
    }
    localStorage.setItem(STORAGE_KEY, data.token);
    trackEvent("key_granted");
    setStatus("granted");
  };

  const submitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { data, error: err } = await supabase.functions.invoke("access-gate", {
      body: {
        action: "request",
        name,
        email,
        message,
        company,
        elapsedMs: Date.now() - startedAt,
      },
    });
    setSubmitting(false);
    if (err || !data?.success) {
      setError("Your request could not be sent. Please write to richard@makil.fr.");
      return;
    }
    setRequestSent(true);
  };

  // The private client area has its own authentication (single-use email link),
  // so it must not sit behind the house key.
  const onPrivateArea =
    typeof window !== "undefined" && window.location.pathname.startsWith("/private");

  if (GATE_PAUSED || onPrivateArea || status === "granted") return <>{children}</>;

  if (status === "checking") {
    return <div className="min-h-screen bg-background" aria-hidden />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <p className="text-[0.65rem] uppercase tracking-[0.5em] text-muted-foreground">
          Private
        </p>
        <h1 className="mt-8 text-4xl font-light tracking-[0.35em]">MAKIL</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          This house is entered by key only. Enter yours to continue.
        </p>

        {mode === "key" ? (
          <form onSubmit={submitKey} className="mt-12 space-y-6">
            <div>
              <label
                htmlFor="access-key"
                className="block text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground"
              >
                Access key
              </label>
              <input
                id="access-key"
                type="password"
                autoComplete="off"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm tracking-[0.25em] outline-none transition-colors focus:border-foreground"
                required
              />
            </div>
            {error && <p className="text-xs tracking-wide text-muted-foreground">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full border border-foreground py-4 text-[0.65rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
            >
              {submitting ? "Verifying" : "Enter"}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("request");
                setError(null);
                trackEvent("key_requested");
              }}
              className="w-full text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Request a key
            </button>
          </form>
        ) : requestSent ? (
          <div className="mt-12 space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your request has been received. If it is a fit, you will hear from me personally.
            </p>
            <button
              type="button"
              onClick={() => {
                setMode("key");
                setRequestSent(false);
              }}
              className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Back
            </button>
          </div>
        ) : (
          <form onSubmit={submitRequest} className="mt-12 space-y-6">
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            {[
              { id: "req-name", label: "Name", value: name, set: setName, type: "text" },
              { id: "req-email", label: "Email", value: email, set: setEmail, type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
                  required
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="req-message"
                className="block text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground"
              >
                Introduction
              </label>
              <textarea
                id="req-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
              />
            </div>
            {error && <p className="text-xs tracking-wide text-muted-foreground">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full border border-foreground py-4 text-[0.65rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
            >
              {submitting ? "Sending" : "Send request"}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("key");
                setError(null);
              }}
              className="w-full text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
            >
              I have a key
            </button>
          </form>
        )}

        <p className="mt-16 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
          By invitation only
        </p>
      </div>
    </main>
  );
};

export default AccessGate;
