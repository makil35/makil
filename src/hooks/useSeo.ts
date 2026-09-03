import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES, type Lang, type RouteKey } from "@/lib/routes";

const SITE_URL = "https://makil.fr";

interface SeoOptions {
  /** Known public route; omit and use `path` for utility routes. */
  routeKey?: RouteKey;
  /** Explicit path for routes not present in ROUTES (e.g. /unsubscribe). */
  path?: string;
  titleKey?: string;
  descriptionKey?: string;
  /** Raw values for dynamic pages (journal articles) not backed by locale keys. */
  title?: string;
  description?: string;
  keywords?: string;
  /** Replaces the default WebPage JSON-LD payload. */
  jsonLd?: Record<string, unknown>;
  /** Keep utility/error pages out of the index. */
  noindex?: boolean;

}

const upsertMeta = (
  matchSelector: string,
  create: () => HTMLElement,
  attr: "content" | "href",
  value: string
) => {
  let el = document.head.querySelector(matchSelector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const upsertLinkRel = (rel: string, hreflang: string | null, href: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  upsertMeta(
    selector,
    () => {
      const l = document.createElement("link");
      l.setAttribute("rel", rel);
      if (hreflang) l.setAttribute("hreflang", hreflang);
      return l;
    },
    "href",
    href
  );
};

const upsertMetaName = (name: string, content: string) => {
  upsertMeta(
    `meta[name="${name}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute("name", name);
      return m;
    },
    "content",
    content
  );
};

const upsertMetaProperty = (property: string, content: string) => {
  upsertMeta(
    `meta[property="${property}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute("property", property);
      return m;
    },
    "content",
    content
  );
};

export const useSeo = ({
  routeKey,
  path: explicitPath,
  titleKey,
  descriptionKey,
  title: rawTitle,
  description: rawDescription,
  keywords: rawKeywords,
  jsonLd,
  noindex,
}: SeoOptions) => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const lang: Lang = language;
    const title = rawTitle ?? (titleKey ? t(titleKey) : "");
    const description = rawDescription ?? (descriptionKey ? t(descriptionKey) : "");

    // Translations load asynchronously: skip while keys are unresolved
    // to avoid exposing raw keys as the document title / meta description.
    if (!title || !description || title === titleKey || description === descriptionKey) return;

    document.title = title;
    document.documentElement.lang = lang;

    upsertMetaName("description", description);


    const path = routeKey ? ROUTES[routeKey][lang] : (explicitPath ?? location.pathname);
    const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
    upsertLinkRel("canonical", null, canonical);
    upsertLinkRel("alternate", "en", canonical);
    upsertLinkRel("alternate", "x-default", canonical);

    // Open Graph
    upsertMetaProperty("og:type", "website");
    upsertMetaProperty("og:site_name", "MAKIL");
    upsertMetaProperty("og:title", title);
    upsertMetaProperty("og:description", description);
    upsertMetaProperty("og:url", canonical);
    upsertMetaProperty("og:locale", "en_GB");
    upsertMetaProperty("og:image", `${SITE_URL}/og-image.jpg`);

    // Twitter
    upsertMetaName("twitter:card", "summary_large_image");
    upsertMetaName("twitter:title", title);
    upsertMetaName("twitter:description", description);
    upsertMetaName("twitter:image", `${SITE_URL}/og-image.jpg`);

    // Robots & ultra-luxe keywords per page
    upsertMetaName(
      "robots",
      noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1"
    );
    const keywords = rawKeywords ?? "private adviser, personal branding, ultra-luxury, confidential luxury, MAKIL, Makil-Herrero Richard, private advisory, luxury advisory, private signature, select presence, art of living, private clientele, discretion, exactness, Paris, Monaco, Geneva, London, Dubai";
    upsertMetaName("keywords", keywords);

    // JSON-LD WebPage per route
    const ldId = "ld-webpage";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(
      jsonLd ?? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonical,
        inLanguage: "en-GB",
        isPartOf: { "@type": "WebSite", name: "MAKIL", url: SITE_URL },
        about: { "@type": "Thing", name: "Confidential ultra-luxury" },
      }
    );
  }, [routeKey, explicitPath, noindex, titleKey, descriptionKey, rawTitle, rawDescription, rawKeywords, jsonLd, language, location.pathname, t]);

};
