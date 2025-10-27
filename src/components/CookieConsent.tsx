import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Settings } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential = { essential: true, analytics: false, marketing: false };
    savePreferences(onlyEssential);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card/95 backdrop-blur-lg border-t border-border shadow-elegant animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-display font-semibold text-foreground">
                🍪 Gestion des Cookies - RGPD
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Nous respectons votre vie privée. Ce site utilise des cookies essentiels pour son fonctionnement. 
                Avec votre consentement, nous utilisons également des cookies d'analyse et de marketing pour améliorer votre expérience. 
                Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.{" "}
                <Link
                  to="/politique-confidentialite"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Button
                onClick={() => setShowPreferences(true)}
                variant="outline"
                className="font-body"
              >
                <Settings className="mr-2 h-4 w-4" />
                Personnaliser
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="font-body"
              >
                Refuser tout
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90 text-foreground font-body shadow-gold transition-elegant"
              >
                Accepter tout
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display font-semibold text-foreground">
                Personnaliser les cookies
              </h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Retour"
              >
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground">Cookies essentiels</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="ml-4 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    Obligatoire
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground">Cookies analytiques</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Nous permettent de mesurer l'audience et améliorer le site.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground">Cookies marketing</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Utilisés pour personnaliser les publicités et mesurer leur efficacité.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-border">
              <Link
                to="/politique-confidentialite"
                className="text-sm text-primary hover:text-primary/80 underline transition-colors"
              >
                Politique de confidentialité
              </Link>
              <div className="flex gap-3">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="font-body"
                >
                  Refuser tout
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90 text-foreground font-body shadow-gold transition-elegant"
                >
                  Enregistrer mes choix
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
