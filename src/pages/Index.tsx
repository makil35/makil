import { useSeo } from "@/hooks/useSeo";
import { presenceAreaServed, presenceKeywords } from "@/lib/presence";

const Index = () => {
  const { t } = useLanguage();
  useSeo({
    routeKey: "home",
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
    keywords: `private adviser, private advisory, personal branding, confidential advisory, discretion, MAKIL, Makil-Herrero Richard, by introduction only, ${presenceKeywords}`,
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
          name: "Makil-Herrero Richard · Private Adviser · Paris",
          inLanguage: "en-GB",
          isPartOf: { "@id": "https://makil.fr/#website" },
          mainEntity: { "@id": "https://makil.fr/#person" },
        },
        {
          "@type": "Person",
          "@id": "https://makil.fr/#person",
          name: "Makil-Herrero Richard",
          jobTitle: "Private Adviser",
          description:
            `Private adviser in Paris, present in ${presenceCitySentence}. Reading, judgement and quiet orchestration for a select circle. By introduction only.`,
          url: "https://makil.fr/",
          image: "https://makil.fr/og-image.jpg",
          email: "mailto:richard@makil.fr",
          knowsAbout: [
            "Private advisory",
            "Personal branding",
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
            `A private house: access, private orchestration and discreet execution, carried by a single name, across ${presenceCitySentence}.`,
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
        <h1 className="sr-only">MAKIL · Makil-Herrero Richard, Private Adviser</h1>
        <div aria-hidden="true" className="text-[7.5rem] sm:text-[11rem] leading-none font-normal">M</div>
        <p className="mt-6 text-[0.7rem] sm:text-xs tracking-[0.7em] pl-[0.7em]">MAKIL</p>
        <p className="mt-16 sm:mt-20 text-2xl sm:text-3xl font-normal">Makil-Herrero Richard</p>
        <p className="mt-4 text-[0.7rem] sm:text-xs tracking-[0.35em] uppercase text-ink-muted">Private Adviser · Paris</p>

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
