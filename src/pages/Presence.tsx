import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
import Reveal from "@/components/Reveal";
import { useSeo } from "@/hooks/useSeo";
import {
  PRESENCE_CITIES,
  citySlug,
  editorialFor,
  presenceAreaServed,
  presenceCitySentence,
  presenceKeywords,
} from "@/lib/presence";

const SITE_URL = "https://makil.fr";

const Presence = () => {
  useSeo({
    path: "/presence",
    breadcrumbs: [{ name: "Presence", path: "/presence" }],
    title: "Presence · Paris, Monaco, London, Geneva, Dubai, Rome · MAKIL",
    description: `Makil-Herrero Richard, private adviser, is present in ${presenceCitySentence}. One house, one name, one point of contact. By introduction only.`,
    keywords: `presence, private adviser cities, international private advisory, Makil-Herrero Richard, MAKIL, ${presenceKeywords}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Presence · MAKIL",
      url: `${SITE_URL}/presence`,
      inLanguage: "en-GB",
      isPartOf: { "@type": "WebSite", name: "MAKIL", url: SITE_URL },
      about: {
        "@type": "ProfessionalService",
        name: "MAKIL · Private advisory",
        url: SITE_URL,
        areaServed: presenceAreaServed(),
      },
      hasPart: PRESENCE_CITIES.map((city) => ({
        "@type": "WebPage",
        name: `Private adviser in ${city.name}`,
        url: `${SITE_URL}/presence/${citySlug(city.name)}`,
      })),
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: "Presence" }]} />

          <p className="mt-10 text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Presence
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-6">
            Six cities, <em className="italic">one house</em>
          </h1>
          <p className="font-body text-sm leading-loose text-foreground/70 max-w-xl">
            {`Matters are carried in ${presenceCitySentence}. Each city imposes its own manner: a name that opens a door in one place would close it in another. What follows is how the house reads each of them.`}
          </p>

          <ul className="mt-20 space-y-14">
            {PRESENCE_CITIES.map((city, i) => {
              const slug = citySlug(city.name);
              const copy = editorialFor(city);
              return (
                <Reveal as="li" key={slug} delay={i * 90} className="space-y-3">
                  <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
                    {city.countryName}
                  </p>
                  <h2 className="font-display text-2xl text-foreground">
                    <Link
                      to={`/presence/${slug}`}
                      className="underline decoration-foreground/20 decoration-[0.5px] underline-offset-[8px] transition-smooth hover:decoration-foreground/70"
                    >
                      {city.name}
                    </Link>
                  </h2>
                  <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
                    {copy.standfirst}
                  </p>
                  <p className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground/80">
                    {copy.register}
                  </p>
                </Reveal>
              );
            })}
          </ul>

          <NextStep
            links={[
              { kicker: "Mandates", label: "Situations, not services", to: "/mandates" },
              { kicker: "Journal", label: "Read the notes", to: "/journal" },
              { kicker: "Contact", label: "A direct exchange", to: "/contact" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Presence;
