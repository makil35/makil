import { ArrowRight, ChevronDown, UserRound, Globe, Gem, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import portrait from "@/assets/richard-portrait.jpg";
import terrace from "@/assets/lifestyle-terrace.jpg";
import glove from "@/assets/vision-glove.jpg";
import paris from "@/assets/access-paris.jpg";

const Index = () => {
  const { t } = useLanguage();
  useSeo({ routeKey: "home", titleKey: "seo.home.title", descriptionKey: "seo.home.description" });

  const pillars = [
    { icon: UserRound, titleKey: "home.pillar.discretion", descKey: "home.pillar.discretion.desc" },
    { icon: Globe, titleKey: "home.pillar.network", descKey: "home.pillar.network.desc" },
    { icon: Gem, titleKey: "home.pillar.excellence", descKey: "home.pillar.excellence.desc" },
    { icon: Clock, titleKey: "home.pillar.liberty", descKey: "home.pillar.liberty.desc" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none">
          <img
            src={portrait}
            alt={t("home.hero.alt")}
            className="h-full w-full object-cover object-top grayscale contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent lg:from-background lg:via-background/20 lg:to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-10 h-full flex items-end min-h-[calc(100vh-13rem)]">
          <div className="max-w-xl space-y-8">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.hero.kicker")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal leading-[1.05] text-foreground">
              {t("home.hero.title1")} <br />
              <em className="italic">{t("home.hero.title2")}</em>
            </h1>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-md">
              {t("home.hero.desc")}
            </p>
            <a href="#univers" className="inline-flex flex-col items-start gap-2 group pt-4">
              <span className="text-[11px] font-body tracking-[0.3em] uppercase text-accent group-hover:text-foreground transition-smooth">
                {t("home.hero.cta")}
              </span>
              <ChevronDown size={18} className="text-accent group-hover:translate-y-1 transition-smooth" />
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section id="univers" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div
          className="aspect-[4/3] lg:aspect-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${terrace})` }}
          role="img"
          aria-label={t("home.univers.alt")}
        />
        <div className="flex items-center bg-background px-8 sm:px-16 lg:px-24 py-20">
          <div className="max-w-md space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.univers.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.univers.title1")} <br />
              <em className="italic">{t("home.univers.title2")}</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("home.univers.desc")}
            </p>
            <a
              href="#approche"
              className="inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-accent hover:text-foreground transition-smooth pt-4"
            >
              {t("home.univers.cta")} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section id="approche" className="py-28 sm:py-36 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.approche.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
              {t("home.approche.title1")} <em className="italic">{t("home.approche.title2")}</em> {t("home.approche.title3")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 max-w-6xl mx-auto">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.titleKey} className="bg-background px-8 py-12 text-center space-y-5">
                  <Icon size={36} strokeWidth={1} className="mx-auto text-accent" aria-hidden="true" />
                  <h3 className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground">
                    {t(p.titleKey)}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                    {t(p.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-t border-border/40">
        <div className="flex items-center bg-background px-8 sm:px-16 lg:px-24 py-20 order-2 lg:order-1">
          <div className="max-w-md space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.vision.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.vision.title1")} <br />
              <em className="italic">{t("home.vision.title2")}</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("home.vision.desc")}
            </p>
          </div>
        </div>
        <div
          className="aspect-[4/3] lg:aspect-auto bg-cover bg-center order-1 lg:order-2"
          style={{ backgroundImage: `url(${glove})` }}
          role="img"
          aria-label={t("home.vision.alt")}
        />
      </section>

      {/* ACCÈS */}
      <section id="acces" className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-t border-border/40">
        <div className="flex items-center bg-background px-8 sm:px-16 lg:px-24 py-20">
          <div className="max-w-md space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("home.acces.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              {t("home.acces.title1")} <br />
              <em className="italic">{t("home.acces.title2")}</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {t("home.acces.desc")}
            </p>
            <a
              href="mailto:richard@makil.fr"
              target="_top"
              rel="noopener"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 border border-accent text-[11px] font-body tracking-[0.3em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              {t("home.acces.cta")}
            </a>
          </div>
        </div>
        <div
          className="aspect-[4/3] lg:aspect-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${paris})` }}
          role="img"
          aria-label={t("home.acces.alt")}
        />
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
