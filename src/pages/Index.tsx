import { useSeo } from "@/hooks/useSeo";
import { presenceAreaServed, presenceCitySentence, presenceKeywords } from "@/lib/presence";
import monogramM from "@/assets/monogram-m.png";

const Index = () => {
  useSeo({
    routeKey: "home",
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
    keywords: `private dinner orchestration, private dinner orchestrator, non-replicable private dinner, exclusive private dinner, discretion, MAKIL, Makil-Herrero Richard, by introduction only, ${presenceKeywords}`,
    ogType: "profile",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://makil.fr/#website",
          name: "MAKIL",
          url: "https://makil.fr/",
          inLanguage: "en-GB",
          publisher: { "@id": "https://makil.fr/#person" },
        },
        {
          "@type": "ProfilePage",
          "@id": "https://makil.fr/#profilepage",
          url: "https://makil.fr/",
          name: "Makil-Herrero Richard · Private Dinner Orchestration · Paris",
          inLanguage: "en-GB",
          isPartOf: { "@id": "https://makil.fr/#website" },
          mainEntity: { "@id": "https://makil.fr/#person" },
        },
        {
          "@type": "Person",
          "@id": "https://makil.fr/#person",
          name: "Makil-Herrero Richard",
          jobTitle: "Private Dinner Orchestrator",
          description:
            `Private dinner orchestrator in Paris, present in ${presenceCitySentence}. One name, one table, one evening. By introduction only.`,
          url: "https://makil.fr/",
          image: "https://makil.fr/og-image.jpg",
          email: "mailto:richard@makil.fr",
          knowsAbout: [
            "Private dinner orchestration",
            "Non-replicable private dinners",
            "Discretion and confidentiality",
            "Private orchestration",
          ],
          areaServed: presenceAreaServed(),
          address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
          sameAs: [
            "https://www.instagram.com/makilprivate/",
            "https://www.youtube.com/@makilprivate",
            "https://www.facebook.com/richardmakilherrero",
          ],
          worksFor: { "@id": "https://makil.fr/#house" },
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://makil.fr/#house",
          name: "MAKIL",
          url: "https://makil.fr/",
          description:
            `A private house: private dinners that cannot be replicated, access and discreet execution, carried by a single name, across ${presenceCitySentence}.`,
          founder: { "@id": "https://makil.fr/#person" },
          areaServed: presenceAreaServed(),
          email: "mailto:richard@makil.fr",
        },
      ],
    },
  });

  return (
    <div className="min-h-[100svh] flex flex-col bg-ivory text-ink font-didone antialiased">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 sm:py-32 text-center">
        <h1 className="sr-only">MAKIL · Makil-Herrero Richard, Private Dinner Orchestrator</h1>
        <img src={monogramM} alt="" aria-hidden="true" draggable={false} className="mx-auto h-28 w-auto sm:h-40" />
        <p className="mt-6 text-[0.7rem] sm:text-xs tracking-[0.7em] pl-[0.7em]">MAKIL</p>
        <p className="mt-16 sm:mt-20 text-2xl sm:text-3xl font-normal">Makil-Herrero Richard</p>
        <p className="mt-4 text-[0.7rem] sm:text-xs tracking-[0.35em] uppercase text-ink-muted">Private Dinner Orchestration · Paris</p>

        <section className="mt-28 sm:mt-40 max-w-xl space-y-8 text-lg sm:text-xl leading-relaxed text-ink-soft">
          <p>MAKIL is a private house: one name, one point of contact, one line of responsibility.</p>
          <p>Matters are carried in Paris, Monaco, London, Geneva, Dubai, Rome, Luxembourg and New York.</p>
          <p className="italic">By introduction only.</p>
        </section>
      </main>
      <footer className="py-10 px-6 text-center text-[0.65rem] tracking-[0.25em] text-ink-muted">
        Makil-Herrero Richard · Paris · By introduction only
      </footer>
    </div>
  );
};

export default Index;
