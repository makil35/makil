import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

/** Records one page view per route change (first-party, cookie-free). */
const Analytics = () => {
  const { pathname } = useLocation();
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (last.current === pathname) return;
    last.current = pathname;
    trackEvent("page_view", pathname);
    if (pathname.startsWith("/journal/") && pathname !== "/journal/archive") {
      trackEvent("journal_read", pathname);
    }
    if (pathname.startsWith("/private")) {
      trackEvent("private_area_opened", pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
