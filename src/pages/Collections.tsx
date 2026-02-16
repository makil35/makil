import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import pretAPorter from "@/assets/collection-pret-a-porter.jpg";
import hauteCouture from "@/assets/collection-haute-couture.jpg";
import accessoires from "@/assets/collection-accessories.jpg";

const Collections = () => {
  const { t } = useLanguage();

  const collections = [
    {
      image: pretAPorter,
      titleKey: "collections.pretaporter.title",
      descKey: "collections.pretaporter.desc",
    },
    {
      image: hauteCouture,
      titleKey: "collections.hautecouture.title",
      descKey: "collections.hautecouture.desc",
    },
    {
      image: accessoires,
      titleKey: "collections.accessoires.title",
      descKey: "collections.accessoires.desc",
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
              {t("collections.hero.subtitle")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-normal text-foreground leading-[1.1]">
              {t("collections.hero.title")}{" "}
              <em>{t("collections.hero.titleHighlight")}</em>
            </h1>
            <p className="text-sm sm:text-base font-body text-muted-foreground max-w-lg">
              {t("collections.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Collections — Alternating layout */}
      <section className="pb-20 sm:pb-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28 max-w-6xl mx-auto">
            {collections.map((col, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={col.image}
                      alt={t(col.titleKey)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-foreground">
                    {t(col.titleKey)}
                  </h2>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-md">
                    {t(col.descKey)}
                  </p>
                  <div className="w-12 h-px bg-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 sm:py-32 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 mb-16 sm:mb-20">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-background/40">
              {t("collections.philosophy.subtitle")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-background">
              {t("collections.philosophy.title")}{" "}
              <em>{t("collections.philosophy.titleHighlight")}</em>
            </h2>
            <p className="text-sm font-body text-background/50 leading-relaxed">
              {t("collections.philosophy.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 max-w-5xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="text-center space-y-4">
                <div className="w-12 h-px bg-background/20 mx-auto" />
                <h3 className="text-sm sm:text-base font-display font-semibold text-background tracking-wide">
                  {t(`collections.philosophy.${n}.title`)}
                </h3>
                <p className="text-xs sm:text-sm font-body text-background/40 leading-relaxed">
                  {t(`collections.philosophy.${n}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground">
              {t("collections.cta.title")}
            </h2>
            <p className="text-sm font-body text-muted-foreground">
              {t("collections.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background font-body text-xs tracking-[0.2em] uppercase px-10 py-6 transition-smooth"
            >
              <Link to="/contact">
                {t("collections.cta.button")} <ArrowRight className="ml-3" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
