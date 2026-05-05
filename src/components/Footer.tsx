import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-sm tracking-[0.4em] uppercase text-foreground">
            MAKIL
          </span>
          <p className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} MAKIL — {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-[11px] font-body tracking-[0.2em] uppercase">
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t("footer.legal")}
            </Link>
            <Link to="/politique-confidentialite" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
