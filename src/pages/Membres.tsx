import { Check, Crown, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import membersLounge from "@/assets/members-lounge.jpg";
import membershipCard from "@/assets/membership-card.jpg";

const Membres = () => {
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-background mb-6">
              Adhésion Club Business <span className="text-primary">UHNWI Premium</span>
            </h1>
            <p className="text-xl font-body text-background/80 leading-relaxed">
              Rejoignez un cercle exclusif d'entrepreneurs fortunés, investisseurs UHNWI et leaders business d'exception.
              Adhésion sur invitation uniquement - Networking luxe international pour l'élite des affaires.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Avantages <span className="text-gradient-gold">Club Business Exclusif</span>
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-8 leading-relaxed">
                Être membre du Makil Business Club UHNWI, c'est accéder à un écosystème premium exclusif
                de networking luxe conçu pour accélérer votre croissance professionnelle, vos investissements
                et développer votre réseau d'élite international d'entrepreneurs fortunés.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                      <Check size={16} />
                    </div>
                    <span className="font-body text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={membersLounge}
                alt="Members Lounge - Espace networking luxe exclusif pour entrepreneurs UHNWI et investisseurs fortunés club business premium"
                className="rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Adhésion Club Business Premium <span className="text-gradient-gold">UHNWI</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Formules d'adhésion exclusives adaptées aux entrepreneurs fortunés et investisseurs UHNWI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg overflow-hidden transition-elegant ${
                  tier.popular
                    ? "shadow-gold border-2 border-primary transform scale-105"
                    : "shadow-elegant border border-border"
                }`}
              >
                {tier.popular && (
                  <div className="bg-primary text-foreground text-center py-2 font-body font-semibold text-sm">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className="p-8">
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
                    <Link to="/contact">Postuler</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Card Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={membershipCard}
                alt="Carte membre premium club business exclusif UHNWI - Accès VIP networking luxe entrepreneurs et investisseurs fortunés"
                className="rounded-lg shadow-elegant"
              />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-secondary/10 rounded-lg -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Carte Membre <span className="text-gradient-gold">UHNWI Premium</span>
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
                Chaque membre UHNWI reçoit une carte exclusive en métal gravé premium, symbole de
                votre appartenance au réseau d'élite des entrepreneurs fortunés et investisseurs du club business international.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Cette carte membre premium vous ouvre les portes de nos espaces privés de networking luxe et vous
                identifie instantanément comme membre du cercle le plus prestigieux et exclusif
                d'entrepreneurs UHNWI et investisseurs fortunés au monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-display font-bold text-background">
              Rejoindre le Réseau <span className="text-primary">UHNWI d'Élite</span>
            </h2>
            <p className="text-lg font-body text-background/80 leading-relaxed">
              Processus de sélection rigoureux pour entrepreneurs fortunés et investisseurs UHNWI. Adhésion club business exclusif limitée.
              Soumettez votre candidature pour intégrer le réseau d'élite du networking luxe international.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-lg px-12 py-6 shadow-glow transition-elegant"
            >
              <Link to="/contact">Soumettre ma Candidature</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membres;
