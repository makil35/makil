import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Keeps navigation predictable: every route change starts at the top,
 * and hash links (e.g. /#acces) land on the right section after mount.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let frames = 0;
      const tryScroll = () => {
        const target = document.getElementById(id);
        if (target) {
          const padTop = parseFloat(getComputedStyle(target).paddingTop) || 0;
          const y = target.getBoundingClientRect().top + window.scrollY + padTop - 110;
          window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
          return;
        }
        if (frames++ < 30) requestAnimationFrame(tryScroll);
      };
      requestAnimationFrame(tryScroll);
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
