import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { localizedPath } from "@/lib/routes";
import { getArticle, journalArticles, formatArticleDate } from "@/content/journal";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";

const SITE_URL = "https://makil.fr";

const JournalArticle = () => {
  const { slug } = useParams();
  const article = getArticle(slug);

  useSeo({
    path: `/journal/${slug ?? ""}`,
    title: article?.metaTitle ?? "",
    description: article?.metaDescription ?? "",
    keywords: article?.keywords,
    ogType: article ? "article" : undefined,
    article: article
      ? {
          publishedTime: article.date,
          modifiedTime: article.date,
          author: "Makil-Herrero Richard",
          section: article.kicker,
          tags: article.keywords.split(",").map((k) => k.trim()).filter(Boolean),
        }
      : undefined,
    jsonLd: article
      ? {
          "@context": "https://schema.org",
          "@type": ["BlogPosting", "Article"],
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.date,
          dateModified: article.date,
          inLanguage: "en-GB",
          url: `${SITE_URL}/journal/${article.slug}`,
          mainEntityOfPage: `${SITE_URL}/journal/${article.slug}`,
          keywords: article.keywords,
          author: {
            "@type": "Person",
            name: "Makil-Herrero Richard",
            jobTitle: "Private Adviser · Personal Branding",
            url: SITE_URL,
          },
          publisher: { "@type": "Organization", name: "MAKIL", url: SITE_URL },
          isPartOf: { "@type": "Blog", name: "MAKIL Journal", url: `${SITE_URL}/journal` },
        }
      : undefined,
  });

  if (!article) return <Navigate to="/journal" replace />;

  const others = journalArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <article className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: "Journal", to: "/journal" }, { label: article.kicker }]} />

          <p className="mt-8 text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
            {article.kicker} · {formatArticleDate(article.date)} · {article.readingTime}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-foreground/70">
            {article.excerpt}
          </p>

          <div className="mt-14 space-y-10">
            {article.blocks.map((block, i) => (
              <section key={i}>
                {block.heading && (
                  <h2 className="text-xl font-display text-foreground mb-4">{block.heading}</h2>
                )}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="font-body text-sm leading-relaxed text-foreground/80 mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-16 font-body text-sm leading-relaxed text-foreground/70">
            The house, its principles and the way to reach it are described on the{" "}
            <Link to={localizedPath("home")} className="underline underline-offset-4 hover:text-foreground">
              main page
            </Link>
            . Introductions are made through{" "}
            <Link to={`${localizedPath("home")}#access`} className="underline underline-offset-4 hover:text-foreground">
              private access
            </Link>
            .
          </p>

          {others.length > 0 && (
            <nav aria-label="More notes" className="mt-20">
              <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground mb-6">
                More notes
              </p>
              <ul className="space-y-4">
                {others.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/journal/${a.slug}`}
                      className="font-display text-lg text-foreground/80 hover:text-foreground transition-smooth"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <NextStep
            links={[
              { kicker: "Journal", label: "All notes", to: "/journal" },
              { kicker: "Archive", label: "Every note, by month", to: "/journal/archive" },
              { kicker: "Introductions", label: "Begin a conversation", to: "/contact" },
              { kicker: "The house", label: "Profile and principles", to: "/#richard" },
            ]}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default JournalArticle;
