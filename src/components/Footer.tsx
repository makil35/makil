import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoMBC from "@/assets/logo-mbc.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <img 
              src={logoMBC} 
              alt="Makil Business Club" 
              className="h-16 sm:h-20 w-auto"
            />
            <p className="text-xs sm:text-sm font-body text-background/70 leading-relaxed">
              Premier club business exclusif pour Ultra High Net Worth Individuals (UHNWI). Réseau d'élite, networking luxe, événements VIP pour entrepreneurs fortunés et investisseurs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-primary font-display text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link
                  to="/"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/evenements"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link
                  to="/galerie"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  to="/membres"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  {t("nav.members")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 font-body text-xs sm:text-sm">
              <li className="flex items-center space-x-2 text-background/70">
                <Mail size={14} className="text-primary sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">richard@makilbusinessclub.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/70">
                <Phone size={14} className="text-primary sm:w-4 sm:h-4 flex-shrink-0" />
                <span>06.26.50.08.80</span>
              </li>
              <li className="flex items-center space-x-2 text-background/70">
                <MapPin size={14} className="text-primary sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-primary font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Suivez-nous
            </h3>
            <div className="flex space-x-3 sm:space-x-4" role="list" aria-label="Réseaux sociaux">
              <a
                href="https://www.linkedin.com/company/makil-business-club"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez Makil Business Club sur LinkedIn"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-2 sm:p-3 rounded-full transition-smooth"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez Makil Business Club sur Instagram"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-2 sm:p-3 rounded-full transition-smooth"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm font-body text-background/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} Makil {t("footer.businessClub")}. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-body">
              <Link
                to="/mentions-legales"
                className="text-background/60 hover:text-primary transition-smooth"
              >
                {t("footer.legalNotice")}
              </Link>
              <Link
                to="/politique-confidentialite"
                className="text-background/60 hover:text-primary transition-smooth"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/cgu"
                className="text-background/60 hover:text-primary transition-smooth"
              >
                {t("footer.terms")}
              </Link>
              <Link
                to="/cgv"
                className="text-background/60 hover:text-primary transition-smooth"
              >
                {t("footer.sales")}
              </Link>
              <Link
                to="/accessibilite"
                className="text-background/60 hover:text-primary transition-smooth"
              >
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
