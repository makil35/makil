import { Check, Crown, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import membersLounge from "@/assets/members-lounge.jpg";
import membershipCard from "@/assets/membership-card.jpg";

const Membres = () => {
  const { t } = useLanguage();
  
  const benefits = [
    "Accès illimité événements business VIP exclusifs et networking luxe UHNWI",
    "Service concierge premium personnel 24/7 pour entrepreneurs fortunés",
    "Espaces coworking luxe premium dans 10 villes internationales",
    "Introductions qualifiées networking avec entrepreneurs et investisseurs d'élite",
    "Accès opportunités investissement privées et deals exclusifs UHNWI",
    "Invitations voyages business luxe et retreats internationaux premium",
    "Réductions partenaires luxe exclusives (hôtels 5*, restaurants gastronomiques, aviation privée)",
    "Participation deals clubs premium et syndicats investissement UHNWI",
  ];

  const tiers = [
    {
      name: "Gold",
      icon: Star,
      price: "15 000€",
      period: "par an",
      features: [
        "Accès aux événements mensuels",
        "2 invitations par trimestre",
        "Réseau de 500+ membres",
        "Concierge email",
      ],
      popular: false,
    },
    {
      name: "Platinum",
      icon: Crown,
      price: "35 000€",
      period: "par an",
      features: [
        "Tous les avantages Gold",
        "Accès événements VIP illimité",
        "5 invitations par trimestre",
        "Réseau complet 1000+ membres",
        "Concierge téléphone prioritaire",
        "Accès espaces coworking",
      ],
      popular: true,
    },
    {
      name: "Diamond",
      icon: Shield,
      price: "Sur demande",
      period: "membership à vie",
      features: [
        "Tous les avantages Platinum",
        "Événements privés exclusifs",
        "Invitations illimitées",
        "Concierge dédié 24/7",
        "Accès deals clubs premium",
        "Organisation événements sur-mesure",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-4 sm:mb-6">
              {t("members.hero.title")} <span className="text-primary">{t("members.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              {t("members.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6">
                {t("members.benefits.title")} <span className="text-gradient-gold">{t("members.benefits.titleHighlight")}</span>
              </h2>
              <p className="text-base sm:text-lg font-body text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {t("members.benefits.subtitle")}
              </p>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5 sm:mt-1 flex-shrink-0">
                      <Check size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="font-body text-sm sm:text-base text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src={membersLounge}
                alt="Members Lounge - Espace networking luxe exclusif pour entrepreneurs UHNWI et investisseurs fortunés club business premium"
                className="rounded-lg shadow-elegant"
              />
              <div className="hidden sm:block absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-12 sm:py-14 md:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4 px-4">
              {t("members.tiers.title")} <span className="text-gradient-gold">{t("members.tiers.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              {t("members.tiers.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg overflow-hidden transition-elegant ${
                  tier.popular
                    ? "shadow-gold border-2 border-primary md:transform md:scale-105"
                    : "shadow-elegant border border-border"
                }`}
              >
                {tier.popular && (
                  <div className="bg-primary text-foreground text-center py-2 font-body font-semibold text-xs sm:text-sm">
                    {t("members.tiers.popular")}
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <tier.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {tier.name}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-display font-bold text-foreground mb-1">
                      {tier.price}
                    </div>
                    <div className="text-sm font-body text-muted-foreground">
                      {tier.period}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <Check className="text-primary mt-0.5" size={18} />
                        <span className="font-body text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full font-body font-semibold transition-smooth ${
                      tier.popular
                        ? "bg-primary hover:bg-primary/90 text-foreground shadow-gold"
                        : "bg-secondary hover:bg-secondary/90 text-background"
                    }`}
                  >
                    <Link to="/contact">{t("members.tiers.apply")}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Card Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={membershipCard}
                alt="Carte membre premium club business exclusif UHNWI - Accès VIP networking luxe entrepreneurs et investisseurs fortunés"
                className="rounded-lg shadow-elegant"
              />
              <div className="hidden sm:block absolute -top-6 -left-6 md:-top-8 md:-left-8 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-lg -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6">
                {t("members.card.title")} <span className="text-gradient-gold">{t("members.card.titleHighlight")}</span>
              </h2>
              <p className="text-base sm:text-lg font-body text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {t("members.card.desc1")}
              </p>
              <p className="text-base sm:text-lg font-body text-muted-foreground leading-relaxed">
                {t("members.card.desc2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-background px-4">
              {t("members.cta.title")} <span className="text-primary">{t("members.cta.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-background/80 leading-relaxed px-4">
              {t("members.cta.subtitle")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 shadow-glow transition-elegant"
            >
              <Link to="/contact">{t("members.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membres;
