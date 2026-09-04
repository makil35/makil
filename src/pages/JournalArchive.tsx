import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { journalArticles, formatArticleDate } from "@/content/journal";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";

const SITE_URL = "https://makil.fr";

const monthLabel = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

const JournalArchive = () => {
  const sorted = [...journalArticles].sort((a, b) => (a.date < b.date ? 1 : -1));

  const groups: { key: string; label: string; items: typeof journalArticles }[] = [];
  sorted.forEach((article) => {
    const key = article.date.slice(0, 7);
    const existing = groups.find((g) => g.key === key);
    if (existing) existing.items.push(article);
    else groups.push({ key, label: monthLabel(article.date), items: [article] });
  });

  useSeo({
    path: "/journal/archive",
    breadcrumbs: [
      { name: "Journal", path: "/journal" },
      { name: "Archive", path: "/journal/archive" },
    ],
    title: "Journal Archive · Monthly Notes · MAKIL",
    description:
      "The complete archive of monthly notes by Makil-Herrero Richard, private adviser in Paris: private advisory, personal branding, discretion and private orchestration.",
    keywords:
      "journal archive, private adviser notes, monthly notes, personal branding archive, MAKIL, Makil-Herrero Richard, Paris",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "MAKIL Journal Archive",
      description:
        "Complete archive of the monthly notes published by Makil-Herrero Richard, private adviser.",
      url: `${SITE_URL}/journal/archive`,
      inLanguage: "en-GB",
      isPartOf: { "@type": "Blog", name: "MAKIL Journal", url: `${SITE_URL}/journal` },
      mainEntity: {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: sorted.length,
        itemListElement: sorted.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/journal/${a.slug}`,
          name: a.title,
        })),
      },
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto min-w-0">
          <PageIntro crumbs={[{ label: "Journal", to: "/journal" }, { label: "Archive" }]} />

          <p className="mt-10 text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Archive
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-6">
            Every note, by month
          </h1>
          <p className="font-body text-sm leading-relaxed text-foreground/70 max-w-xl mb-16">
            One note a month. Nothing is removed; the history remains readable
            in the order it was written.
          </p>

          <div className="space-y-16">
            {groups.map((group) => (
              <section key={group.key}>
                <h2 className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground pb-4 border-b border-border">
                  {group.label}
                </h2>
                <ul className="mt-6 space-y-6">
                  {group.items.map((a) => (
                    <li key={a.slug} className="min-w-0">
                      <Link
                        to={`/journal/${a.slug}`}
                        className="font-display text-lg sm:text-xl text-foreground/85 hover:text-foreground transition-smooth"
                      >
                        {a.title}
                      </Link>
                      <p className="mt-2 text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
                        {a.kicker} · {formatArticleDate(a.date)} · {a.readingTime}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <NextStep
            links={[
              { kicker: "Journal", label: "Latest notes", to: "/journal" },
              { kicker: "The house", label: "Profile and principles", to: "/#richard" },
              { kicker: "Mandates", label: "Situations, not services", to: "/mandates" },
              { kicker: "Correspondence", label: "Write", to: "/contact" },
              { kicker: "Access", label: "By introduction", to: "/#access" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JournalArchive;
