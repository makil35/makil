import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { journalArticles } from "@/content/journal";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import portraitMakil from "@/assets/richard-portrait.jpg";
import NextStep from "@/components/NextStep";
import Signature from "@/components/Signature";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import { scrollToSection } from "@/lib/scrollToSection";


const Index = () => {
  const { t } = useLanguage();
  useSeo({
    routeKey: "home",
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
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
            "Private adviser in Paris. Reading, judgement and quiet orchestration for a select circle. By introduction only.",
          url: "https://makil.fr/",
          image: "https://makil.fr/og-image.jpg",
          email: "mailto:richard@makil.fr",
          knowsAbout: [
            "Private advisory",
            "Personal branding",
            "Discretion and confidentiality",
            "Private orchestration",
          ],
          areaServed: ["Paris", "Monaco", "London", "Geneva", "Dubai"],
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
            "A private house: access, private orchestration and discreet execution, carried by a single name.",
          founder: { "@id": "https://makil.fr/#person" },
          areaServed: ["Paris", "Monaco", "London", "Geneva", "Dubai"],
          email: "mailto:richard@makil.fr",
        },
      ],
    },
  });


  const pillars = [
    { titleKey: "home.pillar.discretion", descKey: "home.pillar.discretion.desc" },
    { titleKey: "home.pillar.network", descKey: "home.pillar.network.desc" },
    { titleKey: "home.pillar.excellence", descKey: "home.pillar.excellence.desc" },
    { titleKey: "home.pillar.liberty", descKey: "home.pillar.liberty.desc" },
  ];

  const Index_ = ({ n }: { n: string }) => (
    <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground/60 tabular-nums">{n}</span>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#richard"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-[11px] focus:uppercase focus:tracking-[0.3em] focus:text-background"
      >
        {t("a11y.skip")}
      </a>

      <Navigation />

      {/* HERO */}
      <header className="relative flex min-h-[clamp(680px,92svh,980px)] items-center overflow-hidden bg-background atmosphere grain">
        <div className="container relative z-10 mx-auto w-full px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="min-w-0 max-w-2xl space-y-10">
            <p
              className="animate-rise text-[10px] font-body tracking-luxe uppercase text-muted-foreground"
              style={{ animationDelay: "80ms" }}
            >
              {t("home.hero.kicker")}
            </p>
            <h1
              className="animate-rise text-4xl sm:text-5xl md:text-[4.5rem] font-display font-normal leading-[1.06] tracking-[-0.015em] text-foreground"
              style={{ animationDelay: "200ms" }}
            >
              {t("home.hero.title1")} <br />
              <em className="italic">{t("home.hero.title2")}</em>
            </h1>
            <p
              className="animate-rise text-[10px] font-body tracking-[0.3em] uppercase text-foreground/60"
              style={{ animationDelay: "340ms" }}
            >
              {t("home.hero.role")}
            </p>
            <p
              className="animate-rise text-sm font-body text-muted-foreground leading-loose max-w-md"
              style={{ animationDelay: "460ms" }}
            >
              {t("home.hero.desc")}
            </p>
            <a
              href="#richard"
              onClick={(e) => {
                if (scrollToSection("richard")) {
                  e.preventDefault();
                  window.history.replaceState(null, "", "#richard");
                }
              }}
              className="animate-rise inline-flex flex-col items-start gap-3 group pt-4"
              style={{ animationDelay: "600ms" }}
            >
              <span className="link-underline text-[10px] font-body tracking-luxe uppercase text-muted-foreground group-hover:text-foreground transition-smooth">
                {t("home.hero.cta")}
              </span>
              <ChevronDown
                size={16}
                strokeWidth={1}
                className="animate-drift text-muted-foreground group-hover:text-foreground transition-smooth"
              />
            </a>

          </div>
        </div>
      </header>

      <main>
        {/* PROFILE */}
        <section id="richard" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto grid grid-cols-1 items-start gap-16 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 lg:px-10">
            <div className="min-w-0 max-w-2xl space-y-6">
              <Reveal className="space-y-6">
                <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                  <Index_ n="01" />
                  {t("home.profil.kicker")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                  {t("home.profil.title1")} <br />
                  <em className="italic">{t("home.profil.title2")}</em>
                </h2>
                <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.profil.p1")}</p>
                <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.profil.p2")}</p>
                <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.profil.p3")}</p>
                <p className="text-sm font-body text-foreground/80 leading-loose italic font-display">{t("home.profil.p4")}</p>

                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                  {[
                    ["home.profil.stat1", "home.profil.stat1.desc"],
                    ["home.profil.stat2", "home.profil.stat2.desc"],
                    ["home.profil.stat3", "home.profil.stat3.desc"],
                  ].map(([k, d]) => (
                    <div key={k}>
                      <dt className="font-display text-lg text-foreground">{t(k)}</dt>
                      <dd className="mt-2 text-[10px] font-body tracking-[0.18em] uppercase text-muted-foreground">
                        {t(d)}
                      </dd>
                    </div>
                  ))}
                </dl>

                <figure className="pt-8">
                  <blockquote className="font-display italic text-lg sm:text-xl leading-relaxed text-foreground/90">
                    {t("home.profil.quote")}
                  </blockquote>
                  <figcaption className="mt-5 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                    {t("home.profil.sign")}
                  </figcaption>
                  <div className="pt-4">
                    <Signature className="h-10 sm:h-12 opacity-70" />
                  </div>
                </figure>

              </Reveal>
            </div>

            <Reveal delay={120} className="min-w-0 lg:sticky lg:top-32">
              <figure className="space-y-4">
                <img
                  src={portraitMakil}
                  alt="Portrait of Makil-Herrero Richard, private adviser in Paris"
                  loading="lazy"
                  width={1024}
                  height={1536}
                  className="aspect-[2/3] w-full max-w-[320px] object-cover object-center grayscale lg:max-w-none"
                />
                <figcaption className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
                  Makil-Herrero Richard · Paris
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* SIGNATURE */}
        <section id="signature" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl space-y-6">
              <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                <Index_ n="02" />
                {t("home.univers.kicker")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                {t("home.univers.title1")} <br />
                <em className="italic">{t("home.univers.title2")}</em>
              </h2>
              <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.univers.desc")}</p>
              <a
                href="#approach"
                className="link-underline inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground transition-smooth mt-6"
              >
                {t("home.univers.cta")} <ArrowRight size={14} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* APPROCHE */}
        <section id="approach" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal className="text-center space-y-4 mb-20">
              <p className="flex items-center justify-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                <Index_ n="03" />
                {t("home.approche.kicker")}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
                {t("home.approche.title1")} <em className="italic">{t("home.approche.title2")}</em>{" "}
                {t("home.approche.title3")}
              </h2>
            </Reveal>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 max-w-6xl mx-auto">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.titleKey} delay={i * 120} className="text-center space-y-4">
                  <h3 className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground">{t(p.titleKey)}</h3>
                  <p className="text-xs font-body text-muted-foreground leading-loose max-w-[220px] mx-auto">
                    {t(p.descKey)}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PRIVATE MANDATES */}
        <section id="mandates" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl space-y-6">
              <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                <Index_ n="04" />
                {t("home.mandates.kicker")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                {t("home.mandates.title1")} <br />
                <em className="italic">{t("home.mandates.title2")}</em>
              </h2>
              <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.mandates.p1")}</p>
              <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.mandates.p2")}</p>
              <p className="text-sm font-body text-foreground/80 leading-loose italic font-display pt-4">{t("home.mandates.p3")}</p>
              <Link
                to="/mandates"
                className="link-underline inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground transition-smooth mt-6"
              >
                The shape of a mandate <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl ml-auto text-left space-y-6">
              <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                <Index_ n="05" />
                {t("home.vision.kicker")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                {t("home.vision.title1")} <br />
                <em className="italic">{t("home.vision.title2")}</em>
              </h2>
              <p className="text-sm font-body text-muted-foreground leading-loose">{t("home.vision.desc")}</p>
            </Reveal>
          </div>
        </section>

        {/* CREDIBILITY */}
        <section id="principles" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl space-y-6 mb-16">
              <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                <Index_ n="06" />
                {t("home.credibility.kicker")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                {t("home.credibility.title1")} <br />
                <em className="italic">{t("home.credibility.title2")}</em>
              </h2>
            </Reveal>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 max-w-6xl">
              {[
                ["home.credibility.item1", "home.credibility.item1.desc"],
                ["home.credibility.item2", "home.credibility.item2.desc"],
                ["home.credibility.item3", "home.credibility.item3.desc"],
                ["home.credibility.item4", "home.credibility.item4.desc"],
              ].map(([k, d], i) => (
                <Reveal as="li" key={k} delay={i * 120} className="space-y-3">
                  <h3 className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground">{t(k)}</h3>
                  <p className="text-xs font-body text-muted-foreground leading-loose max-w-[260px]">{t(d)}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ACCÈS */}
        <section id="access" className="scroll-mt-24 py-28 sm:py-40 bg-background atmosphere grain relative overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <Reveal className="lg:col-span-4">
                <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                  <Index_ n="07" />
                  {t("home.acces.kicker")}
                </p>
              </Reveal>

              <div className="lg:col-span-8 space-y-10">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.08] tracking-tight text-foreground">
                    {t("home.acces.title1")} <br />
                    <em className="italic">{t("home.acces.title2")}</em>
                  </h2>
                </Reveal>

                <Reveal delay={140}>
                  <p className="max-w-xl text-sm font-body text-muted-foreground leading-loose">
                    {t("home.acces.desc")}
                  </p>
                </Reveal>

                <Reveal delay={280}>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      if (scrollToSection("contact")) e.preventDefault();
                    }}
                    className="group inline-flex items-center gap-5 px-9 py-5 border border-foreground/25 text-[11px] font-body tracking-[0.35em] uppercase text-foreground transition-smooth hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {t("home.acces.cta")}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNAL */}
        <section id="journal" className="scroll-mt-24 py-24 sm:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl space-y-6 mb-16">
              <p className="flex items-center gap-4 text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                <Index_ n="08" />
                Journal
              </p>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                Notes on reading, judgement <br />
                <em className="italic">and silence</em>
              </h2>
            </Reveal>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl">
              {journalArticles.slice(0, 3).map((a, i) => (
                <Reveal as="li" key={a.slug} delay={i * 120} className="space-y-3">
                  <p className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">{a.kicker}</p>
                  <h3 className="font-display text-lg leading-snug text-foreground">
                    <Link to={`/journal/${a.slug}`} className="hover:opacity-70 transition-smooth">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="text-xs font-body text-muted-foreground leading-loose">{a.excerpt}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-14">
              <Link
                to="/journal"
                className="inline-flex items-center gap-3 text-[10px] font-body tracking-[0.35em] uppercase text-foreground/70 hover:text-foreground transition-smooth"
              >
                All notes <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
        </section>

        <ContactSection />

        <div className="container mx-auto px-6 lg:px-10 pb-24">
          <NextStep
            links={[
              { kicker: "Mandates", label: "Situations, not services", to: "/mandates" },
              { kicker: "Journal", label: "Read the notes", to: "/journal" },
              { kicker: "Correspondence", label: "Write", to: "/contact" },
              { kicker: "Information", label: "Legal notice", to: "/legal-notice" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
