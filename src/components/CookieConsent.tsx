import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";

const CookieConsent = () => {
  const { t } = useLanguage();
  const privacyPath = localizedPath("privacy");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem(
      "cookie-preferences",
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-body text-foreground leading-relaxed">
            {t("cookie.description")}{" "}
            <Link
              to={privacyPath}
              className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              {t("cookie.learnMore")}
            </Link>
          </p>
          <Button
            onClick={handleContinue}
            variant="outline"
            className="font-body text-xs sm:text-sm border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors shrink-0"
          >
            {t("cookie.continue")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
