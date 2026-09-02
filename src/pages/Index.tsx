import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  const { t } = useLanguage();
  useSeo({ routeKey: "home", titleKey: "seo.home.title", descriptionKey: "seo.home.description" });

  const pillars = [
    { titleKey: "home.pillar.discretion", descKey: "home.pillar.discretion.desc" },
    { titleKey: "home.pillar.network", descKey: "home.pillar.network.desc" },
    { titleKey: "home.pillar.excellence", descKey: "home.pillar.excellence.desc" },
    { titleKey: "home.pillar.liberty", descKey: "home.pillar.liberty.desc" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-6 py-28 lg:px-10">
          <div className="max-w-2xl space-y-10">
            <p className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
              {t("home.hero.kicker")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[4.25rem] font-display font-normal leading-[1.08] tracking-[-0.01em] text-foreground">
              {t("home.hero.title1")} <br />
              <em className="italic">{t("home.hero.title2")}</em>
            </h1>
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-foreground/60">
              {t("home.hero.role")}
            </p>
            <p className="text-sm font-body text-muted-foreground leading-loose max-w-md">
              {t("home.hero.desc")}
            </p>
            <a href="#univers" className="inline-flex flex-col items-start gap-3 group pt-4">
              <span className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground group-hover:text-foreground transition-smooth">
                {t("home.hero.cta")}
              </span>
              <ChevronDown size={16} strokeWidth={1} className="text-muted-foreground group-hover:translate-y-1 transition-smooth" />
            </a>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profil" className="py-32 sm:py-44 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-6">
              <p className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
                {t("home.profil.kicker")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
                {t("home.profil.title1")} <br />
                <em className="italic">{t("home.profil.title2")}</em>
              </h2>
              <p className="text-sm font-body text-muted-foreground leading-loose">
                {t("home.profil.p1")}
              </p>
              <p className="text-sm font-body text-muted-foreground leading-loose">
                {t("home.profil.p2")}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-12">
              <dl className="space-y-8">
                {[
                  ["home.profil.stat1", "home.profil.stat1.desc"],
                  ["home.profil.stat2", "home.profil.stat2.desc"],
                  ["home.profil.stat3", "home.profil.stat3.desc"],
                ].map(([k, d]) => (
                  <div key={k} className="pt-5">
                    <dt className="font-display text-xl text-foreground">{t(k)}</dt>
                    <dd className="mt-2 text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground">
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
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section id="univers" className="py-32 sm:py-44 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
              {t("home.univers.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.univers.title1")} <br />
              <em className="italic">{t("home.univers.title2")}</em>
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-loose">
              {t("home.univers.desc")}
            </p>
            <a
              href="#approche"
              className="inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground transition-smooth pt-4"
            >
              {t("home.univers.cta")} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section id="approche" className="py-32 sm:py-44 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
              {t("home.approche.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
              {t("home.approche.title1")} <em className="italic">{t("home.approche.title2")}</em> {t("home.approche.title3")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 max-w-6xl mx-auto">
            {pillars.map((p) => (
              <div key={p.titleKey} className="text-center space-y-4">
                <h3 className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground">
                  {t(p.titleKey)}
                </h3>
                <p className="text-xs font-body text-muted-foreground leading-loose max-w-[220px] mx-auto">
                  {t(p.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-32 sm:py-44 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl ml-auto text-left space-y-6">
            <p className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
              {t("home.vision.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.vision.title1")} <br />
              <em className="italic">{t("home.vision.title2")}</em>
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-loose">
              {t("home.vision.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ACCÈS */}
      <section id="acces" className="py-32 sm:py-44 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-[10px] font-body tracking-luxe uppercase text-muted-foreground">
              {t("home.acces.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.acces.title1")} <br />
              <em className="italic">{t("home.acces.title2")}</em>
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-loose">
              {t("home.acces.desc")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 border border-foreground/30 text-[11px] font-body tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-smooth"
            >
              {t("home.acces.cta")}
            </a>
          </div>
        </div>
      </section>


      <ContactSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
