import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer>
      {/* Makil Private banner */}
      <div className="bg-foreground">
        <div className="container mx-auto px-6 lg:px-10 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-body tracking-[0.4em] uppercase text-background/70">
              {t("footer.makilPrivate")}
            </span>
            <span className="inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-background/50">
              {t("footer.discoverExperiences")}
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-background">
        <div className="container mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display text-sm tracking-[0.4em] uppercase text-foreground hover:opacity-70 transition-smooth"
              aria-label={t("nav.home")}
            >
              MAKIL
            </button>
            <p className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground">
              © {new Date().getFullYear()} MAKIL · {t("footer.rights")}
            </p>
            <div className="flex gap-6 text-[11px] font-body tracking-[0.2em] uppercase">
              <Link to={localizedPath("legal")} className="text-muted-foreground hover:text-foreground transition-smooth">
                {t("footer.legal")}
              </Link>
              <Link to={localizedPath("privacy")} className="text-muted-foreground hover:text-foreground transition-smooth">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
