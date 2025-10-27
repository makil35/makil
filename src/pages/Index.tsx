import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import heroImage from "@/assets/hero-image.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-background leading-tight">
              Le Premier Club Business Exclusif des{" "}
              <span className="text-gradient-gold">UHNWI</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-background/90 leading-relaxed">
              Réseau d'élite exclusif d'entrepreneurs fortunés et investisseurs UHNWI (Ultra High Net Worth Individuals).
              Networking luxe, événements VIP et opportunités business premium internationales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-lg px-8 py-6 shadow-gold transition-elegant"
              >
                <Link to="/contact">
                  Devenir Membre <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary bg-transparent hover:bg-primary/10 text-background hover:text-primary font-body font-semibold text-lg px-8 py-6 transition-elegant"
              >
                <Link to="/evenements">Découvrir nos Événements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Club Business Premium : Une Expérience <span className="text-gradient-gold">Unique</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Makil Business Club offre bien plus qu'un simple réseau professionnel : networking luxe pour entrepreneurs UHNWI et investisseurs fortunés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Réseau d'Élite UHNWI",
                description: "Networking exclusif avec entrepreneurs fortunés, investisseurs et leaders d'affaires internationaux triés sur le volet",
              },
              {
                icon: Calendar,
                title: "Événements Business VIP",
                description: "Accédez à des événements exclusifs de networking luxe dans les lieux les plus prestigieux du monde",
              },
              {
                icon: Award,
                title: "Opportunités Business Premium",
                description: "Découvrez des opportunités d'investissement exclusives, deals privés et collaborations stratégiques uniques",
              },
              {
                icon: Sparkles,
                title: "Service Concierge Luxe",
                description: "Bénéficiez d'un service concierge premium personnalisé 24/7 pour entrepreneurs et investisseurs",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-gold transition-elegant group"
              >
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-elegant">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-background mb-4">
              Événements Business VIP <span className="text-primary">Exclusifs</span>
            </h2>
            <p className="text-lg font-body text-background/80 max-w-2xl mx-auto">
              Découvrez nos prochains événements de networking luxe pour entrepreneurs UHNWI et investisseurs fortunés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                  className="w-full h-80 object-cover group-hover:scale-110 transition-elegant duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                  <h3 className="text-2xl font-display font-bold mb-2">{event.title}</h3>
                  <p className="font-body text-background/80 mb-1">{event.date}</p>
                  <p className="font-body text-primary text-sm">{event.location}</p>
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
                Voir Tous les Événements <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-background">
              Rejoindre le Club Business Exclusif <span className="text-gradient-gold">UHNWI</span>
            </h2>
            <p className="text-xl font-body text-background/80 leading-relaxed">
              Adhésion strictement sur invitation pour entrepreneurs fortunés et investisseurs UHNWI.
              Intégrez le réseau d'élite du networking business international premium.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold text-lg px-12 py-6 shadow-glow transition-elegant"
            >
              <Link to="/contact">
                Soumettre ma Candidature <ArrowRight className="ml-2" size={20} />
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
