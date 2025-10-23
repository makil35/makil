import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const Evenements = () => {
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

      {/* Coming Soon Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Événements à <span className="text-gradient-gold">Venir</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Nos prochains événements exclusifs seront bientôt annoncés.
              Restez connectés pour ne rien manquer.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
