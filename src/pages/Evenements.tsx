import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const Evenements = () => {
  const events = [
    {
      id: 1,
      image: event1,
      title: "Networking Gala 2024",
      date: "15 Décembre 2024",
      time: "19h00 - 23h00",
      location: "Hôtel Plaza Athénée, Paris",
      attendees: 120,
      description:
        "Une soirée exceptionnelle réunissant l'élite du business international dans un cadre somptueux. Cocktail, dîner gastronomique et networking exclusif.",
      type: "Gala",
    },
    {
      id: 2,
      image: event2,
      title: "Yacht Summit Monaco",
      date: "22 Janvier 2025",
      time: "14h00 - 20h00",
      location: "Port Hercule, Monaco",
      attendees: 50,
      description:
        "Une journée exclusive à bord d'un yacht de luxe. Discussions stratégiques, opportunités d'investissement et networking dans un cadre privilégié.",
      type: "Summit",
    },
    {
      id: 3,
      image: event3,
      title: "Private Dining Experience",
      date: "8 Février 2025",
      time: "20h00 - 00h00",
      location: "Restaurant Le Meurice, Paris",
      attendees: 30,
      description:
        "Dîner gastronomique étoilé en comité restreint. Échanges intimistes entre entrepreneurs et investisseurs dans l'un des meilleurs restaurants de Paris.",
      type: "Dîner",
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
              Événements <span className="text-primary">Exclusifs</span>
            </h1>
            <p className="text-xl font-body text-background/80 leading-relaxed">
              Des expériences uniques conçues pour créer des connexions authentiques
              entre les membres les plus influents du club.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-elegant"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-foreground px-4 py-2 rounded-full text-sm font-body font-semibold">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-foreground">
                          <Calendar className="text-primary" size={20} />
                          <span className="font-body">
                            {event.date} • {event.time}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-foreground">
                          <MapPin className="text-primary" size={20} />
                          <span className="font-body">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-foreground">
                          <Users className="text-primary" size={20} />
                          <span className="font-body">
                            {event.attendees} participants attendus
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-foreground font-body font-semibold shadow-gold transition-smooth">
                        Réserver ma Place
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Événements <span className="text-gradient-gold">Passés</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Découvrez les moments forts de nos précédents événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-elegant group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={i === 1 ? event1 : i === 2 ? event2 : event3}
                    alt={`Event ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Summer Gala 2024
                  </h3>
                  <p className="text-sm font-body text-muted-foreground">
                    Juin 2024 • Paris, France
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
