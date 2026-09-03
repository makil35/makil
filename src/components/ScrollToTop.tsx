import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHash } from "@/lib/scrollToSection";

/**
 * Keeps navigation predictable: every route change starts at the top,
 * and hash links (e.g. /#access) land on the right section after mount.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToHash(hash);
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
