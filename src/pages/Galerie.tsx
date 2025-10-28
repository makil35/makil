import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Galerie = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-4 sm:mb-6">
              Galerie <span className="text-primary">Club Business Exclusif</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              Découvrez l'univers exclusif du Makil Business Club UHNWI à travers nos photos et vidéos 
              d'événements de networking luxe, galas VIP et rencontres premium entre entrepreneurs fortunés et investisseurs.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
              Galerie Événements Business VIP <span className="text-gradient-gold">UHNWI</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              Notre galerie de photos et vidéos exclusives des événements de networking luxe et rencontres premium 
              entre entrepreneurs et investisseurs sera bientôt disponible. Découvrez l'univers du club business d'élite international.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
