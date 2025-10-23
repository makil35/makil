import { useState } from "react";
import { Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import heroImage from "@/assets/hero-image.jpg";
import membersLounge from "@/assets/members-lounge.jpg";

const Galerie = () => {
  const [selectedTab, setSelectedTab] = useState<"photos" | "videos">("photos");

  const photos = [
    { id: 1, src: event1, title: "Networking Gala", category: "Events" },
    { id: 2, src: event2, title: "Yacht Summit", category: "Events" },
    { id: 3, src: event3, title: "Private Dining", category: "Events" },
    { id: 4, src: heroImage, title: "Members Lounge", category: "Spaces" },
    { id: 5, src: membersLounge, title: "VIP Area", category: "Spaces" },
    { id: 6, src: event1, title: "Business Meeting", category: "Networking" },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: event1,
      title: "Makil Business Club - Présentation",
      duration: "2:34",
    },
    {
      id: 2,
      thumbnail: event2,
      title: "Yacht Summit 2024 - Highlights",
      duration: "3:15",
    },
    {
      id: 3,
      thumbnail: event3,
      title: "Témoignages Membres Premium",
      duration: "4:02",
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
              Galerie <span className="text-primary">Médias</span>
            </h1>
            <p className="text-xl font-body text-background/80 leading-relaxed">
              Découvrez l'univers exclusif du Makil Business Club à travers nos photos
              et vidéos d'événements prestigieux.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedTab("photos")}
              className={`px-8 py-3 rounded-lg font-body font-semibold transition-smooth ${
                selectedTab === "photos"
                  ? "bg-primary text-foreground shadow-gold"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setSelectedTab("videos")}
              className={`px-8 py-3 rounded-lg font-body font-semibold transition-smooth ${
                selectedTab === "videos"
                  ? "bg-primary text-foreground shadow-gold"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              Vidéos
            </button>
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      {selectedTab === "photos" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-elegant cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-elegant duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background translate-y-full group-hover:translate-y-0 transition-elegant">
                    <h3 className="text-xl font-display font-bold mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-sm font-body text-primary">{photo.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos Grid */}
      {selectedTab === "videos" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-elegant cursor-pointer"
                >
                  <div className="relative h-64">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-elegant duration-700"
                    />
                    <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-smooth" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary text-foreground w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-elegant shadow-glow">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-body">
                      {video.duration}
                    </div>
                  </div>
                  <div className="bg-card p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-display font-bold text-background">
              Vivez l'Expérience en <span className="text-primary">Personne</span>
            </h2>
            <p className="text-lg font-body text-background/80">
              Rejoignez-nous lors de notre prochain événement et découvrez par vous-même
              ce qui rend Makil Business Club unique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
