import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Award, Sparkles, FileText, UserCheck, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-background leading-tight">
              {t("home.hero.title")}{" "}
              <span className="text-gradient-gold">{t("home.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body text-background/90 leading-relaxed px-4 sm:px-0">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-gold transition-elegant w-full sm:w-auto"
              >
                <Link to="/contact">
                  {t("home.hero.becomeMember")} <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary bg-transparent hover:bg-primary/10 text-background hover:text-primary font-body font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-elegant w-full sm:w-auto"
              >
                <Link to="/evenements">{t("home.hero.discoverEvents")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 md:mb-4 px-4">
              {t("home.features.title")} <span className="text-gradient-gold">{t("home.features.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto px-4">
              {t("home.features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: t("home.features.network.title"),
                description: t("home.features.network.desc"),
              },
              {
                icon: Calendar,
                title: t("home.features.events.title"),
                description: t("home.features.events.desc"),
              },
              {
                icon: Award,
                title: t("home.features.opportunities.title"),
                description: t("home.features.opportunities.desc"),
              },
              {
                icon: Sparkles,
                title: t("home.features.concierge.title"),
                description: t("home.features.concierge.desc"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-gold transition-elegant group"
              >
                <div className="bg-primary/10 text-primary w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-elegant">
                  <feature.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 md:mb-4 px-4">
              {t("home.process.title")} <span className="text-gradient-gold">{t("home.process.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto px-4">
              {t("home.process.subtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FileText,
                  number: "01",
                  title: t("home.process.step1.title"),
                  description: t("home.process.step1.desc"),
                },
                {
                  icon: UserCheck,
                  number: "02",
                  title: t("home.process.step2.title"),
                  description: t("home.process.step2.desc"),
                },
                {
                  icon: MessageCircle,
                  number: "03",
                  title: t("home.process.step3.title"),
                  description: t("home.process.step3.desc"),
                },
                {
                  icon: CheckCircle2,
                  number: "04",
                  title: t("home.process.step4.title"),
                  description: t("home.process.step4.desc"),
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-elegant group"
                >
                  <div className="absolute -top-4 -left-4 bg-primary text-foreground w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg shadow-gold">
                    {step.number}
                  </div>
                  <div className="bg-primary/10 text-primary w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-elegant">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Connection lines for desktop */}
            <div className="hidden lg:block relative -mt-32 mb-16">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background mb-3 md:mb-4 px-4">
              {t("home.eventsPreview.title")} <span className="text-primary">{t("home.eventsPreview.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-background/80 max-w-2xl mx-auto px-4">
              {t("home.eventsPreview.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              {
                image: event1,
                title: "Networking Gala 2024",
                date: "15 Décembre 2024",
                location: "Hôtel Plaza Athénée, Paris",
              },
              {
                image: event2,
                title: "Yacht Summit Monaco",
                date: "22 Janvier 2025",
                location: "Port Hercule, Monaco",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-elegant"
              >
                <img
                  src={event.image}
                  alt={`${event.title} - Événement networking luxe club business exclusif UHNWI ${event.location}`}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition-elegant duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-background">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-1 md:mb-2">{event.title}</h3>
                  <p className="font-body text-sm sm:text-base text-background/80 mb-0.5 md:mb-1">{event.date}</p>
                  <p className="font-body text-primary text-xs sm:text-sm">{event.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-lg px-8 py-6 shadow-gold transition-elegant"
            >
              <Link to="/evenements">
                {t("home.eventsPreview.seeAll")} <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background px-4">
              {t("home.cta.title")} <span className="text-gradient-gold">{t("home.cta.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              {t("home.cta.subtitle")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 shadow-glow transition-elegant mx-4"
            >
              <Link to="/contact">
                {t("home.cta.button")} <ArrowRight className="ml-2" size={18} />
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
