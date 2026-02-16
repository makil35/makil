import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-makil.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background border-t border-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Makil-Maqil" className="h-10 w-auto invert mix-blend-screen" />
              <span className="font-display text-sm tracking-[0.15em] uppercase text-background">
                Makil-Maqil
              </span>
            </div>
            <p className="text-xs font-body text-background/40 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-body tracking-[0.2em] uppercase text-background/60 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 font-body text-xs">
              <li>
                <Link to="/" className="text-background/40 hover:text-background transition-smooth">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-background/40 hover:text-background transition-smooth">
                  {t("nav.collections")}
                </Link>
              </li>
              <li>
                <Link to="/atelier" className="text-background/40 hover:text-background transition-smooth">
                  {t("nav.atelier")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/40 hover:text-background transition-smooth">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-body tracking-[0.2em] uppercase text-background/60 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 font-body text-xs">
              <li className="flex items-center space-x-2 text-background/40">
                <Mail size={12} className="flex-shrink-0" />
                <span>contact@makil-maqil.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/40">
                <Phone size={12} className="flex-shrink-0" />
                <span>06.26.50.08.80</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-body tracking-[0.2em] uppercase text-background/60 mb-4">
              Social
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-background/30 hover:text-background transition-smooth"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-body text-background/30">
              &copy; {new Date().getFullYear()} Makil-Maqil. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-body">
              <Link to="/mentions-legales" className="text-background/30 hover:text-background/60 transition-smooth">
                {t("footer.legalNotice")}
              </Link>
              <Link to="/politique-confidentialite" className="text-background/30 hover:text-background/60 transition-smooth">
                {t("footer.privacy")}
              </Link>
              <Link to="/cgu" className="text-background/30 hover:text-background/60 transition-smooth">
                {t("footer.terms")}
              </Link>
              <Link to="/cgv" className="text-background/30 hover:text-background/60 transition-smooth">
                {t("footer.sales")}
              </Link>
              <Link to="/accessibilite" className="text-background/30 hover:text-background/60 transition-smooth">
                {t("footer.accessibility")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
