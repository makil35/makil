import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow container mx-auto px-6 lg:px-10 py-32 mt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {t("contact.kicker")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-8">
            {t("contact.title")}
          </h1>
          <div className="w-12 h-px bg-accent mb-8" aria-hidden="true" />
          <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-xl mb-10">
            {t("contact.intro")}
          </p>
          <a
            href="mailto:richard@makil.fr"
            className="inline-flex items-center gap-3 px-8 py-4 border border-accent text-[11px] font-body tracking-[0.3em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            {t("contact.cta")}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
