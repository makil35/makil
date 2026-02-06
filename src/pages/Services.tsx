import { Link } from "react-router-dom";
import { ArrowRight, Plane, Gem, Sparkles, Building2, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const { t } = useLanguage();

  const categories = [
    { icon: Plane, titleKey: "services.categories.travel.title", descKey: "services.categories.travel.desc" },
    { icon: Gem, titleKey: "services.categories.lifestyle.title", descKey: "services.categories.lifestyle.desc" },
    { icon: Sparkles, titleKey: "services.categories.events.title", descKey: "services.categories.events.desc" },
    { icon: Building2, titleKey: "services.categories.patrimoine.title", descKey: "services.categories.patrimoine.desc" },
    { icon: ShieldCheck, titleKey: "services.categories.security.title", descKey: "services.categories.security.desc" },
    { icon: Users, titleKey: "services.categories.family.title", descKey: "services.categories.family.desc" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-36 bg-foreground overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img
            src={servicesHero}
            alt="Makil Conciergerie - Services sur mesure"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-body tracking-[0.35em] uppercase text-primary">
              {t("services.hero.subtitle")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-[1.1]">
              {t("services.hero.title")}{" "}
              <span className="text-gradient-gold">{t("services.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg font-body text-background/50 max-w-lg">
              {t("services.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories — Grid */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-background p-8 sm:p-10 md:p-12 group hover:bg-foreground transition-elegant"
              >
                <cat.icon
                  size={24}
                  className="text-primary mb-6 group-hover:scale-110 transition-elegant"
                />
                <h3 className="text-base sm:text-lg font-display font-semibold text-foreground group-hover:text-background mb-3 transition-elegant">
                  {t(cat.titleKey)}
                </h3>
                <p className="text-sm font-body text-muted-foreground group-hover:text-background/50 leading-relaxed transition-elegant">
                  {t(cat.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 sm:py-32 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-background">
              {t("services.approach.title")}{" "}
              <span className="text-gradient-gold">{t("services.approach.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-background/50 leading-relaxed">
              {t("services.approach.desc")}
            </p>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              {t("services.cta.title")}
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground">
              {t("services.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-sm tracking-wider uppercase px-10 py-6 shadow-gold transition-elegant"
            >
              <Link to="/contact">
                {t("services.cta.button")} <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
