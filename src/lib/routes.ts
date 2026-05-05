export type Lang = "fr" | "en";

export type RouteKey = "home" | "legal" | "privacy";

export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { fr: "/", en: "/en" },
  legal: { fr: "/mentions-legales", en: "/en/legal-notice" },
  privacy: { fr: "/politique-confidentialite", en: "/en/privacy-policy" },
};

export const localizedPath = (key: RouteKey, lang: Lang): string =>
  ROUTES[key][lang];

export const detectLangFromPath = (pathname: string): Lang =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";

/**
 * Given the current pathname, return the equivalent path in the target language.
 */
export const swapLangPath = (pathname: string, target: Lang): string => {
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    const fr = ROUTES[key].fr;
    const en = ROUTES[key].en;
    if (pathname === fr || pathname === en) return ROUTES[key][target];
  }
  return ROUTES.home[target];
};
