/**
 * Smoothly scroll to an in-page section, landing on its content rather than on
 * the large editorial top padding (which reads as a blank screen).
 */
export const scrollToSection = (id: string, headerOffset = 110) => {
  const target = document.getElementById(id);
  if (!target) return false;
  const padTop = parseFloat(getComputedStyle(target).paddingTop) || 0;
  const y = target.getBoundingClientRect().top + window.scrollY + padTop - headerOffset;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
  return true;
};
