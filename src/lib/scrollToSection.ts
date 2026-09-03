/**
 * Smoothly scroll to an in-page section, landing on its content rather than on
 * the large editorial top padding (which reads as a blank screen).
 *
 * Single source of truth for anchor behaviour: navigation, footer, hero CTA
 * and route-level hash handling all go through here.
 */

export const HEADER_OFFSET = 110;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const targetTop = (target: HTMLElement, headerOffset: number) => {
  const padTop = parseFloat(getComputedStyle(target).paddingTop) || 0;
  return Math.max(target.getBoundingClientRect().top + window.scrollY + padTop - headerOffset, 0);
};

/** Ask every Reveal on the page to re-evaluate its visibility. */
export const notifyScrollTargetChange = () => {
  window.dispatchEvent(new CustomEvent("makil:reveal-check"));
};

export const scrollToSection = (id: string, headerOffset = HEADER_OFFSET) => {
  const target = document.getElementById(id);
  if (!target) return false;

  // Reveal-in-progress content can shift the page while it animates, so we
  // settle the layout first, then scroll on the next frame.
  notifyScrollTargetChange();

  requestAnimationFrame(() => {
    window.scrollTo({
      top: targetTop(target, headerOffset),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    // Correct for any late layout shift (fonts, images, reveals).
    window.setTimeout(() => {
      const corrected = targetTop(target, headerOffset);
      if (Math.abs(corrected - window.scrollY) > 8) {
        window.scrollTo({ top: corrected, behavior: "auto" });
      }
    }, 700);
  });

  return true;
};

/**
 * Scroll to a hash after a route change: the section may not be mounted yet,
 * so retry across a few frames before giving up.
 */
export const scrollToHash = (hash: string, headerOffset = HEADER_OFFSET) => {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  let frames = 0;
  const attempt = () => {
    if (scrollToSection(id, headerOffset)) return;
    if (frames++ < 40) requestAnimationFrame(attempt);
  };
  requestAnimationFrame(attempt);
};
