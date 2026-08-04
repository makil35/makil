import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES, type Lang, type RouteKey } from "@/lib/routes";

const SITE_URL = "https://makil.fr";

interface SeoOptions {
  routeKey: RouteKey;
  titleKey: string;
  descriptionKey: string;
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

export const useSeo = ({ routeKey, titleKey, descriptionKey }: SeoOptions) => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const lang: Lang = language;
    const title = t(titleKey);
    const description = t(descriptionKey);

    // Translations load asynchronously: skip while keys are unresolved
    // to avoid exposing raw keys as the document title / meta description.
    if (title === titleKey || description === descriptionKey) return;

    document.title = title;
    document.documentElement.lang = lang;

    upsertMetaName("description", description);

    const path = ROUTES[routeKey][lang];
    const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
    const altFr = `${SITE_URL}${ROUTES[routeKey].fr}`;
    const altEn = `${SITE_URL}${ROUTES[routeKey].en}`;

    upsertLinkRel("canonical", null, canonical);
    upsertLinkRel("alternate", "fr", altFr);
    upsertLinkRel("alternate", "en", altEn);
    upsertLinkRel("alternate", "x-default", altFr);

    // Open Graph
    upsertMetaProperty("og:type", "website");
    upsertMetaProperty("og:site_name", "MAKIL");
    upsertMetaProperty("og:title", title);
    upsertMetaProperty("og:description", description);
    upsertMetaProperty("og:url", canonical);
    upsertMetaProperty("og:locale", lang === "fr" ? "fr_FR" : "en_GB");
    upsertMetaProperty(
      "og:locale:alternate",
      lang === "fr" ? "en_GB" : "fr_FR"
    );
    upsertMetaProperty("og:image", `${SITE_URL}/og-image.jpg`);

    // Twitter
    upsertMetaName("twitter:card", "summary_large_image");
    upsertMetaName("twitter:title", title);
    upsertMetaName("twitter:description", description);
    upsertMetaName("twitter:image", `${SITE_URL}/og-image.jpg`);

    // Robots & ultra-luxe keywords per page
    upsertMetaName("robots", "index, follow, max-image-preview:large, max-snippet:-1");
    const keywords = lang === "fr"
      ? "ultra-luxe, luxe confidentiel, MAKIL, Richard Makil-Herrero, accompagnement ultra-luxe, art de vivre, expériences sur mesure, clientèle privée, discrétion, excellence, Paris, Monaco, Saint-Tropez, Côte d'Azur, Genève, Londres, Dubaï"
      : "ultra-luxury, confidential luxury, MAKIL, Richard Makil-Herrero, bespoke experiences, art de vivre, private clientele, discretion, excellence, Paris, Monaco, Saint-Tropez, French Riviera, Geneva, London, Dubai";
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
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical,
      inLanguage: lang === "fr" ? "fr-FR" : "en-GB",
      isPartOf: { "@type": "WebSite", name: "MAKIL", url: SITE_URL },
      about: { "@type": "Thing", name: lang === "fr" ? "Ultra-luxe confidentiel" : "Confidential ultra-luxury" },
    });
  }, [routeKey, titleKey, descriptionKey, language, location.pathname, t]);
};
