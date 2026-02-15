import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Hand, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import atelierHero from "@/assets/atelier.jpg";

const Atelier = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16 sm:pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${atelierHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-body tracking-[0.4em] uppercase text-background/60">
              {t("atelier.hero.subtitle")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-normal text-background leading-[1.1]">
              {t("atelier.hero.title")}{" "}
              <em>{t("atelier.hero.titleHighlight")}</em>
            </h1>
            <p className="text-sm sm:text-base font-body text-background/50 max-w-lg">
              {t("atelier.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 sm:py-36 md:py-44 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <p className="text-lg sm:text-xl md:text-2xl font-display text-foreground/80 leading-relaxed">
              {t("atelier.intro.line1")}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-display text-foreground leading-relaxed italic">
              {t("atelier.intro.line2")}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-foreground">
              {t("atelier.pillars.title")}{" "}
              <em>{t("atelier.pillars.titleHighlight")}</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {[
              { icon: Scissors, titleKey: "atelier.pillars.1.title", descKey: "atelier.pillars.1.desc" },
              { icon: Hand, titleKey: "atelier.pillars.2.title", descKey: "atelier.pillars.2.desc" },
              { icon: Ruler, titleKey: "atelier.pillars.3.title", descKey: "atelier.pillars.3.desc" },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-background p-10 sm:p-12 md:p-14 group hover:bg-foreground transition-smooth"
              >
                <pillar.icon
                  size={24}
                  className="text-foreground group-hover:text-background mb-8 transition-smooth"
                />
                <h3 className="text-base font-display font-semibold text-foreground group-hover:text-background mb-4 transition-smooth">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-sm font-body text-muted-foreground group-hover:text-background/50 leading-relaxed transition-smooth">
                  {t(pillar.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-background italic">
              {t("atelier.cta.title")}
            </h2>
            <p className="text-sm font-body text-background/40">
              {t("atelier.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-background/20 bg-transparent hover:bg-background/10 text-background font-body text-xs tracking-[0.2em] uppercase px-10 py-6 transition-smooth"
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
