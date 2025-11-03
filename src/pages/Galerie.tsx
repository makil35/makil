import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Galerie = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-4 sm:mb-6">
              {t("gallery.hero.title")} <span className="text-primary">{t("gallery.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              {t("gallery.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
              {t("gallery.coming.title")} <span className="text-gradient-gold">{t("gallery.coming.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              {t("gallery.coming.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
