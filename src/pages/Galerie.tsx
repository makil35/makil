import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Galerie = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-background mb-6">
              Galerie <span className="text-primary">Médias</span>
            </h1>
            <p className="text-xl font-body text-background/80 leading-relaxed">
              Découvrez l'univers exclusif du Makil Business Club à travers nos photos
              et vidéos d'événements prestigieux.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Photos et Vidéos <span className="text-gradient-gold">à Venir</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Notre galerie de photos et vidéos exclusives sera bientôt disponible.
              Revenez prochainement pour découvrir l'univers du club.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
