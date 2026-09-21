/**
 * Post-build static pre-render for crawlers.
 *
 * The app is a single-page application: every URL was served the same HTML,
 * with the home page <title>, description and a canonical pointing at "/".
 * Search engines therefore saw one page repeated, and refused to index the
 * inner pages. This script writes one real HTML file per public route, with
 * its own title, description, canonical and readable text content.
 *
 * Runs automatically after `vite build` (postbuild hook).
 */

import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import {
  PRESENCE_CITIES,
  CITY_EDITORIAL,
  citySlug,
  presenceCityLine,
  presenceCitySentence,
} from "../src/lib/presence";
import { journalArticles } from "../src/content/journal";

const SITE_URL = "https://makil.fr";
const DIST = resolve("dist");

interface Page {
  path: string;
  title: string;
  description: string;
  heading: string;
  paragraphs: string[];
  ogType?: string;
}

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const pages: Page[] = [
  {
    path: "/",
    title: "Makil-Herrero Richard · Private Adviser · Paris",
    description:
      `Makil-Herrero Richard, private adviser in Paris. Reading, judgement and quiet orchestration for a select circle across ${presenceCitySentence}. By introduction only.`,
    heading: "Makil-Herrero Richard, private adviser",
    paragraphs: [
      "MAKIL is a private house: one name, one point of contact, one line of responsibility.",
      `Matters are carried in ${presenceCitySentence}.`,
      "By introduction only. Introductions, never solicitation.",
    ],
  },
  {
    path: "/presence",
    title: `Presence · ${presenceCityLine} · MAKIL`,
    description: `Makil-Herrero Richard, private adviser, is present in ${presenceCitySentence}. One house, one name, one point of contact. By introduction only.`,
    heading: `${PRESENCE_CITIES.length} cities, one house`,
    paragraphs: [
      `Matters are carried in ${presenceCitySentence}. Each city imposes its own manner.`,
    ],
  },
  {
    path: "/mandates",
    title: "Mandates · Situations, not services · MAKIL",
    description:
      "Mandates are accepted by introduction only, limited in number, and never delegated. Makil-Herrero Richard, private adviser, Paris.",
    heading: "Situations, not services",
    paragraphs: [
      "Mandates are limited in number, accepted by introduction only, and never delegated.",
      "One name, one point of contact, one line of responsibility.",
    ],
  },
  {
    path: "/journal",
    title: "Journal · Notes on private advisory · MAKIL",
    description:
      "Notes on private advisory, discretion and judgement, written personally by Makil-Herrero Richard, private adviser in Paris.",
    heading: "Journal",
    paragraphs: [
      "Notes on private advisory, discretion and judgement. One note at a time.",
    ],
  },
  {
    path: "/journal/archive",
    title: "Journal archive · MAKIL",
    description:
      "The complete archive of notes written by Makil-Herrero Richard, private adviser in Paris.",
    heading: "Journal archive",
    paragraphs: ["Every note of the house, in order."],
  },
  {
    path: "/contact",
    title: "Contact · Makil-Herrero Richard · Private Adviser",
    description:
      "A direct and confidential exchange with Makil-Herrero Richard, private adviser in Paris. Enquiries are read personally. By introduction only.",
    heading: "A direct exchange",
    paragraphs: [
      "Enquiries are read personally and answered personally. richard@makil.fr",
    ],
  },
  {
    path: "/legal-notice",
    title: "Legal notice · MAKIL",
    description: "Legal notice of MAKIL, the private house of Makil-Herrero Richard.",
    heading: "Legal notice",
    paragraphs: ["Legal information of the house."],
  },
  {
    path: "/privacy-policy",
    title: "Privacy policy · MAKIL",
    description: "Privacy policy of MAKIL, the private house of Makil-Herrero Richard.",
    heading: "Privacy policy",
    paragraphs: ["How enquiries and personal data are handled."],
  },
];

// One page per city of presence.
for (const city of PRESENCE_CITIES) {
  const slug = citySlug(city.name);
  const copy = CITY_EDITORIAL[slug];
  if (!copy) continue;
  pages.push({
    path: `/presence/${slug}`,
    title: copy.seoTitle,
    description: copy.seoDescription,
    heading: `${copy.headline}, ${city.countryName}`,
    paragraphs: [copy.standfirst, ...copy.paragraphs],
  });
}

// One page per journal note.
for (const note of journalArticles) {
  pages.push({
    path: `/journal/${note.slug}`,
    title: note.metaTitle,
    description: note.metaDescription,
    heading: note.title,
    paragraphs: [note.excerpt, ...note.blocks.flatMap((b) => b.paragraphs)],
    ogType: "article",
  });
}

const template = readFileSync(resolve(DIST, "index.html"), "utf8");

const internalLinks = [
  { path: "/", label: "MAKIL" },
  { path: "/presence", label: "Presence" },
  { path: "/mandates", label: "Mandates" },
  { path: "/journal", label: "Journal" },
  { path: "/contact", label: "Contact" },
  ...PRESENCE_CITIES.map((c) => ({
    path: `/presence/${citySlug(c.name)}`,
    label: `Private adviser in ${c.name}`,
  })),
];

const render = (page: Page) => {
  const canonical = `${SITE_URL}${page.path}`;
  const title = escape(page.title);
  const description = escape(page.description);

  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${description}" />`,
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = html.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="en" href="${canonical}" />`,
  );
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${page.ogType ?? "website"}" />`,
  );
  html = html.replace(
    /<meta name="twitter:title" content="[\s\S]*?" \/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[\s\S]*?" \/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  // Readable content inside #root: React replaces it on hydration, crawlers
  // read it immediately, before any script runs.
  const body = [
    `<h1>${escape(page.heading)}</h1>`,
    ...page.paragraphs.map((p) => `<p>${escape(p)}</p>`),
    `<nav>${internalLinks
      .filter((l) => l.path !== page.path)
      .map((l) => `<a href="${l.path}">${escape(l.label)}</a>`)
      .join(" ")}</nav>`,
  ].join("");

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><div style="position:absolute;left:-9999px;top:0">${body}</div></div>`,
  );

  return html;
};

let written = 0;
for (const page of pages) {
  const file =
    page.path === "/"
      ? resolve(DIST, "index.html")
      : resolve(DIST, `.${page.path}/index.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(page));
  written += 1;
}

console.log(`prerendered ${written} pages for search engines`);
