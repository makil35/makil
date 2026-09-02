import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useSeo } from "@/hooks/useSeo";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");

  useSeo({
    path: "/unsubscribe",
    titleKey: "seo.unsubscribe.title",
    descriptionKey: "seo.unsubscribe.description",
    noindex: true,
  });


  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    (async () => {
      try {
        const r = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
          headers: { apikey: SUPABASE_ANON },
        });
        const data = await r.json();
        if (r.ok && data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch { setState("invalid"); }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    if (error) setState("error");
    else if (data?.success) setState("success");
    else if (data?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-md text-center space-y-6">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">MAKIL</p>
          <h1 className="text-3xl font-display">Unsubscribe</h1>
          {state === "loading" && <p className="text-sm text-muted-foreground">Checking…</p>}
          {state === "valid" && (
            <>
              <p className="text-sm text-muted-foreground">Do you confirm that you wish to unsubscribe from our correspondence?</p>
              <button onClick={confirm} className="inline-flex items-center gap-3 mt-4 px-8 py-4 border border-foreground/30 text-[11px] font-body tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-smooth">
                Confirm unsubscribe
              </button>
            </>
          )}
          {state === "submitting" && <p className="text-sm text-muted-foreground">Processing…</p>}
          {state === "success" && <p className="text-sm text-muted-foreground">You have been unsubscribed. We will not contact you again.</p>}
          {state === "already" && <p className="text-sm text-muted-foreground">This address is already unsubscribed.</p>}
          {state === "invalid" && <p className="text-sm text-muted-foreground">This link is invalid or has expired.</p>}
          {state === "error" && <p className="text-sm text-muted-foreground">Something went wrong. Please try again.</p>}
          <div className="pt-8">
            <Link to="/" className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground transition-smooth">Back to home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
