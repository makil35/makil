import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2 text-[11px] font-body tracking-[0.3em] uppercase ${className}`}
      role="group"
      aria-label={t("nav.langAria")}
    >
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`transition-smooth ${
          language === "fr" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <span className="text-muted-foreground/60" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`transition-smooth ${
          language === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
