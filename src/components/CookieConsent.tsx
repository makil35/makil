import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card/95 backdrop-blur-lg border-t border-border shadow-elegant animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-display font-semibold text-foreground">
              🍪 Protection de vos Données RGPD
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Makil Business Club utilise des cookies et collecte des données pour améliorer votre expérience de navigation, 
              analyser le trafic du site et personnaliser le contenu. Vos données sont traitées conformément au RGPD. 
              En cliquant sur "Accepter", vous consentez à l'utilisation de ces technologies.{" "}
              Consultez notre{" "}
              <Link
                to="/politique-confidentialite"
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                politique de confidentialité
              </Link>
              , nos{" "}
              <Link
                to="/cgu"
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                CGU
              </Link>
              {" "}et nos{" "}
              <Link
                to="/mentions-legales"
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                mentions légales
              </Link>
              .
            </p>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="font-body"
            >
              Refuser
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-foreground font-body shadow-gold transition-elegant"
            >
              Accepter
            </Button>
            <button
              onClick={handleDecline}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
