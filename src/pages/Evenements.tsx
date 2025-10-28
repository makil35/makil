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
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-4 sm:mb-6">
              Événements Business VIP <span className="text-primary">Exclusifs</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              Événements de networking luxe et expériences premium uniques pour entrepreneurs UHNWI et investisseurs fortunés.
              Créez des connexions stratégiques avec les membres les plus influents du club business international.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
              Prochains Événements de Networking Luxe <span className="text-gradient-gold">UHNWI</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              Nos prochains événements business VIP exclusifs pour entrepreneurs fortunés et investisseurs seront bientôt annoncés.
              Restez connectés au réseau d'élite pour ne rien manquer des opportunités de networking premium.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
