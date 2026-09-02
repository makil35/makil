import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const { t } = useLanguage();
  const privacyPath = localizedPath("privacy");
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 bg-card/95 backdrop-blur-lg border-t border-border shadow-elegant animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 space-y-1.5 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-display font-semibold text-foreground">
                🍪 {t("cookie.title")}
              </h3>
              <p className="text-xs sm:text-sm font-body text-muted-foreground leading-relaxed">
                {t("cookie.description")}{" "}
                <Link
                  to={privacyPath}
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  {t("cookie.learnMore")}
                </Link>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-shrink-0 w-full md:w-auto">
              <Button
                onClick={() => setShowPreferences(true)}
                variant="outline"
                className="font-body text-xs sm:text-sm flex-1 sm:flex-initial"
              >
                <Settings className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {t("cookie.customize")}
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="font-body text-xs sm:text-sm flex-1 sm:flex-initial"
              >
                {t("cookie.rejectAll")}
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90 text-foreground font-body shadow-gold transition-elegant text-xs sm:text-sm flex-1 sm:flex-initial"
              >
                {t("cookie.acceptAll")}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-display font-semibold text-foreground">
                {t("cookie.customize")}
              </h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-1.5 sm:p-2 hover:bg-muted rounded-full transition-colors"
                aria-label={t("cookie.back")}
              >
                <X size={18} className="text-muted-foreground sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-1 sm:pr-2">
              <div className="space-y-2 p-3 sm:p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">{t("cookie.essential")}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {t("cookie.essentialDesc")}
                    </p>
                  </div>
                  <div className="ml-2 sm:ml-4 px-2 sm:px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold whitespace-nowrap">
                    {t("cookie.required")}
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-3 sm:p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">{t("cookie.analytics")}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {t("cookie.analyticsDesc")}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-2 sm:ml-4 flex-shrink-0">
                    <input
                      type="checkbox"
                      aria-label={t("cookie.analytics")}
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 sm:w-11 sm:h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="space-y-2 p-3 sm:p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">{t("cookie.marketing")}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {t("cookie.marketingDesc")}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-2 sm:ml-4 flex-shrink-0">
                    <input
                      type="checkbox"
                      aria-label={t("cookie.marketing")}
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 sm:w-11 sm:h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 pt-2 border-t border-border">
              <Link
                to={privacyPath}
                className="text-xs sm:text-sm text-primary hover:text-primary/80 underline transition-colors text-center sm:text-left"
              >
                {t("cookie.privacyLink")}
              </Link>
              <div className="flex gap-2 sm:gap-3">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="font-body text-xs sm:text-sm flex-1 sm:flex-initial"
                >
                  {t("cookie.rejectAll")}
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90 text-foreground font-body shadow-gold transition-elegant text-xs sm:text-sm flex-1 sm:flex-initial"
                >
                  {t("cookie.savePreferences")}
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
