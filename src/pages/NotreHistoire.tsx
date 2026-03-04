import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import histoireImage from "@/assets/histoire-hero.jpg";

const NotreHistoire = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      titleKey: "histoire.pillars.1.title",
      descKey: "histoire.pillars.1.desc",
    },
    {
      titleKey: "histoire.pillars.2.title",
      descKey: "histoire.pillars.2.desc",
    },
    {
      titleKey: "histoire.pillars.3.title",
      descKey: "histoire.pillars.3.desc",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("histoire.hero.subtitle")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-normal text-foreground leading-[1.1]">
              {t("histoire.hero.title")}{" "}
              <em>{t("histoire.hero.titleHighlight")}</em>
            </h1>
            <p className="text-sm sm:text-base font-body text-muted-foreground max-w-lg leading-relaxed">
              {t("histoire.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Story — Editorial with image */}
      <section className="pb-20 sm:pb-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={atelierImage}
                alt={t("histoire.story.imageAlt")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-8">
              <div className="w-12 h-px bg-foreground" />
              <p className="text-sm sm:text-base font-body text-foreground/80 leading-[1.9]">
                {t("histoire.story.p1")}
              </p>
              <p className="text-sm sm:text-base font-body text-foreground/80 leading-[1.9]">
                {t("histoire.story.p2")}
              </p>
              <p className="text-sm sm:text-base font-body text-muted-foreground leading-[1.9] italic">
                {t("histoire.story.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto — dark section */}
      <section className="py-24 sm:py-32 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-background/40">
              {t("histoire.manifesto.subtitle")}
            </p>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display text-background leading-relaxed italic">
              "{t("histoire.manifesto.quote")}"
            </blockquote>
            <div className="w-16 h-px bg-background/20 mx-auto" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 mb-16 sm:mb-20">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("histoire.pillars.subtitle")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-foreground">
              {t("histoire.pillars.title")}{" "}
              <em>{t("histoire.pillars.titleHighlight")}</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 max-w-4xl mx-auto">
            {pillars.map((pillar, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-12 h-px bg-foreground/20 mx-auto" />
                <h3 className="text-sm sm:text-base font-display font-semibold text-foreground tracking-wide">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm font-body text-muted-foreground leading-relaxed">
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
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-background">
              {t("histoire.cta.title")}
            </h2>
            <p className="text-sm font-body text-background/50">
              {t("histoire.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-background/20 bg-transparent hover:bg-background/10 text-background font-body text-xs tracking-[0.2em] uppercase px-10 py-6 transition-smooth"
            >
              <Link to="/contact">
                {t("histoire.cta.button")} <ArrowRight className="ml-3" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreHistoire;
