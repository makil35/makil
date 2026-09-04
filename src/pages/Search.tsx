import { useMemo, useState, FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
import { useSeo } from "@/hooks/useSeo";
import { journalArticles } from "@/content/journal";

interface Entry {
  title: string;
  to: string;
  kicker: string;
  summary: string;
  terms: string;
}

const staticEntries: Entry[] = [
  {
    title: "Private adviser · The house",
    to: "/#approach",
    kicker: "Practice",
    summary:
      "One name, one point of contact. Private advisory conducted personally and by introduction only.",
    terms:
      "private adviser advisory practice approach method paris confidential discretion reading judgement",
  },
  {
    title: "Personal branding, without noise",
    to: "/#signature",
    kicker: "Universe",
    summary:
      "Presence, image and reputation shaped with restraint for families, founders and public figures.",
    terms:
      "personal branding image reputation presence founder public figure profile positioning",
  },
  {
    title: "Vision · Clarity before noise",
    to: "/#vision",
    kicker: "Vision",
    summary: "What guides every engagement: exactness, restraint and protected attention.",
    terms: "vision philosophy values exactness restraint attention heritage makil banu ma'qil",
  },
  {
    title: "Access · By introduction only",
    to: "/#access",
    kicker: "Access",
    summary: "How an engagement begins, and why the list stays short.",
    terms: "access invitation introduction availability engagement client",
  },
  {
    title: "Correspondence",
    to: "/contact",
    kicker: "Contact",
    summary: "A direct exchange. Every message is read personally.",
    terms: "contact email conversation message reach enquiry",
  },
  {
    title: "Journal",
    to: "/journal",
    kicker: "Journal",
    summary: "Notes on reading, judgement and silence.",
    terms: "journal blog articles notes writing insight",
  },
  {
    title: "Legal notice",
    to: "/legal-notice",
    kicker: "Legal",
    summary: "Publisher, hosting and intellectual property of makil.fr.",
    terms: "legal notice mentions publisher hosting siret intellectual property",
  },
  {
    title: "Privacy policy",
    to: "/privacy-policy",
    kicker: "Privacy",
    summary: "How personal data is collected, used and protected. GDPR rights and cookies.",
    terms: "privacy gdpr data protection cookies rights consent",
  },
];

const entries: Entry[] = [
  ...staticEntries,
  ...journalArticles.map((a) => ({
    title: a.title,
    to: `/journal/${a.slug}`,
    kicker: a.kicker,
    summary: a.excerpt,
    terms: `${a.title} ${a.keywords} ${a.excerpt}`.toLowerCase(),
  })),
];

const normalise = (v: string) =>
  v
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const Search = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  useSeo({
    path: "/search",
    title: "Search · MAKIL · Private Adviser",
    description:
      "Search the MAKIL house of Makil-Herrero Richard: private advisory, personal branding, journal notes and direct correspondence.",
    keywords:
      "MAKIL search, private adviser search, Makil-Herrero Richard, personal branding Paris",
    noindex: true,
  });

  const submitted = initial.trim();

  const results = useMemo(() => {
    if (!submitted) return [];
    const words = normalise(submitted).split(/\s+/).filter(Boolean);
    return entries
      .map((e) => {
        const haystack = normalise(`${e.title} ${e.summary} ${e.terms}`);
        const score = words.reduce((s, w) => (haystack.includes(w) ? s + 1 : s), 0);
        return { e, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.e);
  }, [submitted]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    setParams(q ? { q } : {}, { replace: true });
  };

  const toContact = () =>
    navigate(`/contact${submitted ? `?q=${encodeURIComponent(submitted)}` : ""}`);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-24 mt-16">
        <div className="max-w-4xl mx-auto">
          <PageIntro crumbs={[{ label: "Search" }]} />

          <header className="mt-16 mb-16">
            <p className="text-[10px] font-body tracking-[0.45em] uppercase text-muted-foreground">
              Private index
            </p>
            <h1 className="mt-8 text-5xl sm:text-6xl font-display leading-[1.05] tracking-tight text-foreground">
              Search the <em className="italic">practice</em>
            </h1>
            <div aria-hidden="true" className="mt-10 h-px w-16 bg-foreground/25" />
            <p className="mt-10 max-w-xl text-sm font-body text-muted-foreground leading-loose">
              A quiet index of what is written here. If the answer is not written here, it is
              answered in private.
            </p>
          </header>

          <form onSubmit={onSubmit} className="border-t border-foreground/10 pt-10">
            <label
              htmlFor="site-search"
              className="block text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground mb-3"
            >
              Query
            </label>
            <div className="flex items-end gap-6">
              <input
                id="site-search"
                type="search"
                autoComplete="off"
                maxLength={160}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Private adviser, personal branding, discretion…"
                className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground outline-none py-3 text-lg font-display text-foreground placeholder:text-muted-foreground/40 transition-colors duration-500"
              />
              <button
                type="submit"
                className="shrink-0 border-b border-foreground/30 pb-1 text-[10px] font-body tracking-[0.35em] uppercase text-foreground transition-smooth hover:border-foreground"
              >
                Search
              </button>
            </div>
          </form>

          <section className="mt-20" aria-live="polite">
            {submitted && (
              <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
                {results.length} {results.length === 1 ? "entry" : "entries"} · “{submitted}”
              </p>
            )}

            <ul className="mt-10 divide-y divide-foreground/10 border-t border-foreground/10">
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="group block py-10">
                    <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
                      {r.kicker}
                    </p>
                    <p className="mt-3 flex items-baseline gap-4 font-display text-2xl sm:text-3xl text-foreground/85 transition-smooth group-hover:text-foreground">
                      {r.title}
                      <span
                        aria-hidden="true"
                        className="text-base transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                    <p className="mt-4 max-w-2xl text-sm font-body text-muted-foreground leading-loose">
                      {r.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            {submitted && results.length === 0 && (
              <p className="mt-10 max-w-xl text-sm font-body text-muted-foreground leading-loose">
                Nothing written on this. It does not mean there is no answer.
              </p>
            )}

            {submitted && (
              <div className="mt-20 border-t border-foreground/10 pt-12">
                <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
                  Write
                </p>
                <p className="mt-6 max-w-xl font-display text-2xl sm:text-3xl leading-tight text-foreground">
                  What is written here is carried, word for word, to a direct line.
                </p>
                <button
                  type="button"
                  onClick={toContact}
                  className="mt-10 inline-flex items-center gap-4 border border-foreground/25 px-8 py-4 text-[10px] font-body tracking-[0.35em] uppercase text-foreground transition-smooth hover:border-foreground"
                >
                  Write
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </section>

          <NextStep
            links={[
              { kicker: "Practice", label: "The approach", to: "/#approach" },
              { kicker: "Mandates", label: "Situations, not services", to: "/mandates" },
              { kicker: "Journal", label: "Read the notes", to: "/journal" },
              { kicker: "Presence", label: "Six cities", to: "/presence" },
              { kicker: "Contact", label: "Write", to: "/contact" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
