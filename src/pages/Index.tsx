import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-fashion.jpg";
import pretAPorter from "@/assets/collection-pret-a-porter.jpg";
import hauteCouture from "@/assets/collection-haute-couture.jpg";
import accessoires from "@/assets/makil-bag.png";

const Index = () => {
  const { t } = useLanguage();

  const collections = [
    {
      image: pretAPorter,
      title: t("home.collections.pretaporter"),
      desc: t("home.collections.pretaporter.desc"),
      link: "/collections",
    },
    {
      image: hauteCouture,
      title: t("home.collections.hautecouture"),
      desc: t("home.collections.hautecouture.desc"),
      link: "/collections",
    },
    {
      image: accessoires,
      title: t("home.collections.accessoires"),
      desc: t("home.collections.accessoires.desc"),
      link: "/collections",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero — Full-screen editorial */}
      <section className="relative min-h-screen flex items-end pb-16 sm:pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-body tracking-[0.4em] uppercase text-background/60">
              {t("home.hero.subtitle")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal text-background leading-[1.05]">
              {t("home.hero.title")}{" "}
              <em>{t("home.hero.titleHighlight")}</em>
            </h1>
            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground font-body text-xs tracking-[0.2em] uppercase px-10 py-6 transition-smooth"
              >
                <Link to="/collections">
                  {t("home.hero.cta")} <ArrowRight className="ml-3" size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — Minimal poetic text */}
      <section className="py-28 sm:py-36 md:py-44 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <p className="text-xl sm:text-2xl md:text-3xl font-display text-foreground/80 leading-relaxed">
              {t("home.intro.line1")}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-display text-foreground leading-relaxed italic">
              {t("home.intro.line2")}
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="bg-background pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground text-center mb-16">
            {t("home.collections.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {collections.map((col, i) => (
              <Link
                key={i}
                to={col.link}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden mb-5">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-display font-semibold text-foreground mb-1">
                  {col.title}
                </h3>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  {col.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-background">
              {t("home.cta.title")}
            </h2>
            <p className="text-sm font-body text-background/50">
              {t("home.cta.desc")}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-background/20 bg-transparent hover:bg-background/10 text-background font-body text-xs tracking-[0.2em] uppercase px-10 py-6 transition-smooth"
            >
              <Link to="/contact">
                {t("home.cta.button")} <ArrowRight className="ml-3" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
