import { useEffect, useState, type ReactNode } from "react";
import monogramM from "@/assets/monogram-m.png";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "makil.access.token";

// Gate active: the house is entered by key only.
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
  const [denied, setDenied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      setDenied(true);
      return;
    }
    localStorage.setItem(STORAGE_KEY, data.token);
    trackEvent("key_granted");
    setStatus("granted");
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
    <main className="relative min-h-screen bg-background text-foreground atmosphere grain flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md border border-border/70 bg-background/80 px-8 py-14 text-center sm:px-12 sm:py-16">
        <p className="text-[0.6rem] uppercase tracking-luxe text-muted-foreground">
          Private
        </p>
        <h1 className="mt-6">
          <img
            src={monogramM}
            alt="M"
            className="mx-auto h-20 w-auto sm:h-24"
            draggable={false}
          />
          <span className="mt-7 block font-display text-[0.6rem] uppercase tracking-[0.7em] text-muted-foreground">
            Makil
          </span>
          <span className="mt-2 block font-display text-[0.5rem] uppercase tracking-[0.3em] text-muted-foreground/60">
            Private Dinner Orchestration · Paris
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-xs text-sm leading-loose text-muted-foreground">
          MAKIL orchestrates private dinners. One name. One line of responsibility. By introduction only.
        </p>

        <form onSubmit={submitKey} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="access-key"
              className={`block text-[0.6rem] uppercase tracking-[0.4em] transition-colors ${
                error ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Access key
            </label>
            <input
              id="access-key"
              type="password"
              autoComplete="off"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              onAnimationEnd={() => setDenied(false)}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "access-key-error" : undefined}
              className={`mt-3 w-full border-b bg-transparent py-3 text-center text-sm tracking-[0.35em] outline-none transition-colors focus:border-foreground ${
                error ? "border-foreground text-foreground" : "border-border"
              } ${denied ? "animate-denied" : ""}`}
              required
            />
          </div>
          {error && (
            <p
              id="access-key-error"
              aria-live="polite"
              className="animate-fade text-center font-display text-xs italic tracking-wide text-foreground/80"
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full border border-foreground py-4 text-[0.65rem] uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-40"
          >
            {submitting ? "Verifying" : "Enter"}
          </button>
        </form>

        <p className="mt-16 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
          By invitation only
        </p>
        <p className="mt-4 font-display text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground/70">
          Makil-Herrero Richard
        </p>
      </div>

      <p className="absolute bottom-8 left-0 right-0 px-6 text-center font-display text-[0.7rem] font-light italic tracking-wide text-muted-foreground/80">
        Access is granted by introduction only.
      </p>
    </main>
  );
};

export default AccessGate;
