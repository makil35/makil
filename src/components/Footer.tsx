import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";

const LongArrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 12"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M0 6h30M30 6l-5.5-5M30 6l-5.5 5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer>
      {/* Makil Private banner */}
      <div className="bg-background border-t border-foreground/10">
        <div className="container mx-auto px-6 lg:px-10 py-10 sm:py-12">
          <div className="group flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-[11px] font-body tracking-[0.4em] uppercase text-foreground/60 transition-smooth group-hover:text-foreground">
              {t("footer.makilPrivate")}
            </span>

            <span className="inline-flex items-center gap-4 text-[10px] font-body tracking-[0.35em] uppercase text-foreground/40 transition-smooth group-hover:text-foreground/80">
              {t("footer.discoverExperiences")}
              <span className="relative flex items-center justify-center w-9 h-9 border border-foreground/10 rounded-full transition-smooth group-hover:border-foreground/30 group-hover:scale-105">
                <LongArrow className="w-5 h-5 text-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" />
              </span>
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
