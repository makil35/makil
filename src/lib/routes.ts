export type Lang = "en";

export type RouteKey = "home" | "legal" | "privacy";

export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { en: "/" },
  legal: { en: "/legal-notice" },
  privacy: { en: "/privacy-policy" },
};

export const localizedPath = (key: RouteKey, _lang: Lang = "en"): string =>
  ROUTES[key].en;

export const detectLangFromPath = (_pathname: string): Lang => "en";
