import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { localizedPath } from "@/lib/routes";
import { journalArticles, formatArticleDate } from "@/content/journal";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";

const SITE_URL = "https://makil.fr";

const Journal = () => {
  useSeo({
    path: "/journal",
    title: "Journal · Private Adviser & Personal Branding · MAKIL",
    description:
      "Notes on private advisory and personal branding by Makil-Herrero Richard, private adviser in Paris. Discretion, restraint and the practice behind a name.",
    keywords:
      "private adviser journal, personal branding notes, ultra-luxury advisory insights, discretion, reputation management, Makil-Herrero Richard, MAKIL Paris",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "MAKIL Journal",
      description:
        "Notes on private advisory and personal branding by Makil-Herrero Richard, private adviser in Paris.",
      url: `${SITE_URL}/journal`,
      inLanguage: "en-GB",
      author: { "@type": "Person", name: "Makil-Herrero Richard" },
      blogPost: journalArticles.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        description: a.excerpt,
        datePublished: a.date,
        url: `${SITE_URL}/journal/${a.slug}`,
      })),
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: "Journal" }]} />
          <p className="mt-10 text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Journal
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-6">
            Private advisory and personal branding
          </h1>
          <p className="font-body text-sm leading-relaxed text-foreground/70 max-w-xl mb-16">
            Short notes on how a private practice is organised: what is decided,
            what is declined, and what is never published.
          </p>

          <div className="space-y-14">
            {journalArticles.map((article) => (
              <article key={article.slug}>
                <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground mb-3">
                  {article.kicker} · {formatArticleDate(article.date)} · {article.readingTime}
                </p>
                <h2 className="text-2xl font-display text-foreground mb-3">
                  <Link
                    to={`/journal/${article.slug}`}
                    className="hover:opacity-70 transition-smooth"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="font-body text-sm leading-relaxed text-foreground/70 max-w-2xl">
                  {article.excerpt}
                </p>
                <Link
                  to={`/journal/${article.slug}`}
                  className="inline-block mt-4 text-[10px] font-body tracking-[0.35em] uppercase text-foreground/60 hover:text-foreground transition-smooth"
                >
                  Read
                </Link>
              </article>
            ))}
          </div>

          <NextStep
            links={[
              { kicker: "The practice", label: "Profile and principles", to: localizedPath("home") },
              { kicker: "Introductions", label: "Begin a conversation", to: "/contact" },
              { kicker: "Access", label: "By invitation only", to: "/#acces" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;
