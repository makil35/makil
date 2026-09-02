import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import portrait from "@/assets/richard-portrait.jpg";

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
      <section className="relative bg-background pt-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 lg:py-24 lg:min-h-[calc(100svh-5rem)]">
            <div className="order-2 lg:order-1 max-w-xl space-y-7">
              <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
                {t("home.hero.kicker")}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal leading-[1.05] text-foreground">
                {t("home.hero.title1")} <br />
                <em className="italic">{t("home.hero.title2")}</em>
              </h1>
              <div className="w-12 h-px bg-accent" aria-hidden="true" />
              <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-md">
                {t("home.hero.desc")}
              </p>
              <a href="#univers" className="inline-flex flex-col items-start gap-2 group pt-2">
                <span className="text-[11px] font-body tracking-[0.3em] uppercase text-accent group-hover:text-foreground transition-smooth">
                  {t("home.hero.cta")}
                </span>
                <ChevronDown size={18} className="text-accent group-hover:translate-y-1 transition-smooth" />
              </a>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src={portrait}
                alt={t("home.hero.alt")}
                className="w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] object-cover object-top grayscale contrast-110"
                loading="eager"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section id="univers" className="py-24 sm:py-32 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.univers.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.univers.title1")} <br />
              <em className="italic">{t("home.univers.title2")}</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("home.univers.desc")}
            </p>
            <a
              href="#approche"
              className="inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-accent hover:text-foreground transition-smooth pt-4"
            >
              {t("home.univers.cta")} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section id="approche" className="py-24 sm:py-32 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.approche.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
              {t("home.approche.title1")} <em className="italic">{t("home.approche.title2")}</em> {t("home.approche.title3")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-6xl mx-auto">
            {pillars.map((p) => (
              <div key={p.titleKey} className="text-center space-y-4">
                <h3 className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground">
                  {t(p.titleKey)}
                </h3>
                <p className="text-xs font-body text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                  {t(p.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-24 sm:py-32 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl ml-auto text-left space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.vision.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.vision.title1")} <br />
              <em className="italic">{t("home.vision.title2")}</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("home.vision.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ACCÈS */}
      <section id="acces" className="py-24 sm:py-32 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.acces.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.acces.title1")} <br />
              <em className="italic">{t("home.acces.title2")}</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("home.acces.desc")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 border border-accent text-[11px] font-body tracking-[0.3em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
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
