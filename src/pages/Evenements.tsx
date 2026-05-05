import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Evenements = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow container mx-auto px-6 lg:px-10 py-32 mt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {t("events.kicker")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-8">
            {t("events.title")}
          </h1>
          <div className="w-12 h-px bg-accent mb-8" aria-hidden="true" />
          <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-xl">
            {t("events.intro")}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Evenements;
