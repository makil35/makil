import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import atelierHero from "@/assets/atelier.jpg";
import atelierHands from "@/assets/atelier-hands.jpg";
import atelierMatieres from "@/assets/atelier-matieres.jpg";
import atelierOutils from "@/assets/atelier-outils.jpg";

const Atelier = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero — Full-bleed immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${atelierHero})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          <p className="text-xs sm:text-sm font-body tracking-[0.5em] uppercase text-background/50">
            {t("atelier.hero.subtitle")}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-normal text-background leading-[1.05]">
            {t("atelier.hero.title")}{" "}
            <em>{t("atelier.hero.titleHighlight")}</em>
          </h1>
          <p className="text-sm sm:text-base font-body text-background/40 max-w-md mx-auto">
            {t("atelier.hero.desc")}
          </p>
        </div>
      </section>

      {/* Quote — Dramatic typographic */}
      <section className="py-32 sm:py-40 md:py-48 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-px bg-foreground/20 mx-auto mb-12" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-foreground/80 leading-[1.5] italic">
              {t("atelier.intro.line1")}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-foreground leading-[1.5] mt-2">
              {t("atelier.intro.line2")}
            </p>
            <div className="w-12 h-px bg-foreground/20 mx-auto mt-12" />
          </div>
        </div>
      </section>

      {/* Savoir-faire — Asymmetric editorial layout */}
      <section className="bg-background pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-5xl mx-auto mb-20">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground mb-6">
              {t("atelier.savoirfaire.subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-foreground leading-[1.1]">
              {t("atelier.savoirfaire.title")}{" "}
              <em className="text-foreground/60">{t("atelier.savoirfaire.titleHighlight")}</em>
            </h2>
          </div>

          {/* Image + text — Staggered */}
          <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
            {/* Block 1: Large image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={atelierHands}
                    alt={t("atelier.pillars.2.title")}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">01</span>
                <h3 className="text-2xl sm:text-3xl font-display font-normal text-foreground">
                  {t("atelier.pillars.2.title")}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-[1.8]">
                  {t("atelier.pillars.2.desc")}
                </p>
                <p className="text-sm font-body text-muted-foreground leading-[1.8]">
                  {t("atelier.detail.hands")}
                </p>
              </div>
            </div>

            {/* Block 2: Text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">02</span>
                <h3 className="text-2xl sm:text-3xl font-display font-normal text-foreground">
                  {t("atelier.pillars.1.title")}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-[1.8]">
                  {t("atelier.pillars.1.desc")}
                </p>
                <p className="text-sm font-body text-muted-foreground leading-[1.8]">
                  {t("atelier.detail.matieres")}
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={atelierMatieres}
                    alt={t("atelier.pillars.1.title")}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Block 3: Full-width image + text overlay */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={atelierOutils}
                    alt={t("atelier.pillars.3.title")}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">03</span>
                <h3 className="text-2xl sm:text-3xl font-display font-normal text-foreground">
                  {t("atelier.pillars.3.title")}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-[1.8]">
                  {t("atelier.pillars.3.desc")}
                </p>
                <p className="text-sm font-body text-muted-foreground leading-[1.8]">
                  {t("atelier.detail.mesure")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — Horizontal numbered steps on dark */}
      <section className="py-24 sm:py-32 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-background/40 mb-6">
              {t("atelier.process.subtitle")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-background mb-20">
              {t("atelier.process.title")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { num: "I", titleKey: "atelier.process.1.title", descKey: "atelier.process.1.desc" },
                { num: "II", titleKey: "atelier.process.2.title", descKey: "atelier.process.2.desc" },
                { num: "III", titleKey: "atelier.process.3.title", descKey: "atelier.process.3.desc" },
                { num: "IV", titleKey: "atelier.process.4.title", descKey: "atelier.process.4.desc" },
              ].map((step, i) => (
                <div key={i} className="space-y-4">
                  <span className="text-3xl sm:text-4xl font-display text-background/15">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-display font-semibold text-background tracking-wide">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-xs font-body text-background/40 leading-[1.8]">
                    {t(step.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Poetic, centered */}
      <section className="py-32 sm:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-10">
            <div className="w-12 h-px bg-foreground/20 mx-auto" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-foreground italic">
              {t("atelier.cta.title")}
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("atelier.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background font-body text-xs tracking-[0.2em] uppercase px-12 py-6 transition-smooth"
            >
              <Link to="/contact">
                {t("atelier.cta.button")} <ArrowRight className="ml-3" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Atelier;
