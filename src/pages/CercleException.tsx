import { Link } from "react-router-dom";
import { ArrowRight, Crown, Diamond, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import cercleHero from "@/assets/cercle-hero.jpg";

const CercleException = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero — Full-bleed immersive */}
      <section className="relative min-h-[80vh] flex items-end pb-16 sm:pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cercleHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs sm:text-sm font-body tracking-[0.35em] uppercase text-primary">
              {t("cercle.hero.subtitle")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-[1.1]">
              {t("cercle.hero.title")}{" "}
              <span className="text-gradient-gold">{t("cercle.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg font-body text-background/50 max-w-xl">
              {t("cercle.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro poétique */}
      <section className="py-24 sm:py-32 md:py-40 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl font-display text-background/80 leading-relaxed italic">
              {t("cercle.intro.line1")}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-display text-primary leading-relaxed italic">
              {t("cercle.intro.line2")}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              {t("cercle.pillars.title")}{" "}
              <span className="text-gradient-gold">{t("cercle.pillars.titleHighlight")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {[
              { icon: Crown, titleKey: "cercle.pillars.1.title", descKey: "cercle.pillars.1.desc" },
              { icon: Diamond, titleKey: "cercle.pillars.2.title", descKey: "cercle.pillars.2.desc" },
              { icon: Lock, titleKey: "cercle.pillars.3.title", descKey: "cercle.pillars.3.desc" },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-background p-10 sm:p-12 md:p-14 group hover:bg-foreground transition-elegant"
              >
                <pillar.icon
                  size={28}
                  className="text-primary mb-8 group-hover:scale-110 transition-elegant"
                />
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-background mb-4 transition-elegant">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-sm font-body text-muted-foreground group-hover:text-background/60 leading-relaxed transition-elegant">
                  {t(pillar.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-background italic">
              {t("cercle.cta.title")}
            </h2>
            <p className="text-base sm:text-lg font-body text-background/40">
              {t("cercle.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-primary/40 bg-transparent hover:bg-primary/10 text-primary font-body font-semibold text-sm tracking-wider uppercase px-10 py-6 transition-elegant"
            >
              <Link to="/contact">
                {t("cercle.cta.button")} <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CercleException;
