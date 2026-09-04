import { supabase } from "@/integrations/supabase/client";

/**
 * First-party, cookie-free measurement.
 * Nothing personal is stored: an event name, the path, the referring host
 * and an anonymous per-tab session id kept in sessionStorage only.
 */

const SESSION_KEY = "makil-session";

const sessionId = (): string => {
  if (typeof window === "undefined") return "";
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
};

const referrerHost = (): string | null => {
  if (typeof document === "undefined" || !document.referrer) return null;
  try {
    const url = new URL(document.referrer);
    if (url.host === window.location.host) return null;
    return url.host.slice(0, 300);
  } catch {
    return null;
  }
};

/** Conversion and audience events recorded by the site. */
export type SiteEvent =
  | "page_view"
  | "contact_form_sent"
  | "email_click"
  | "key_requested"
  | "key_granted"
  | "journal_read"
  | "private_area_opened";

export const trackEvent = (event: SiteEvent, path?: string) => {
  if (typeof window === "undefined") return;
  const payload = {
    event,
    path: (path ?? window.location.pathname).slice(0, 300),
    referrer: referrerHost(),
    session_id: sessionId(),
  };
  void supabase
    .from("site_events")
    .insert(payload)
    .then(undefined, () => undefined);
};
