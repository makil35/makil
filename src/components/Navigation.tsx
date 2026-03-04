import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.histoire"), path: "/notre-histoire" },
    { name: t("nav.collections"), path: "/collections" },
    { name: t("nav.atelier"), path: "/atelier" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" aria-label="Makil-Maqil - Retour à l'accueil">
            <span className="font-display text-sm tracking-[0.15em] uppercase text-foreground">
              Makil-Maqil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                role="menuitem"
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`font-body text-[10px] xl:text-xs tracking-[0.15em] xl:tracking-[0.2em] uppercase transition-smooth whitespace-nowrap ${
                  isActive(link.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSelector />
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-muted-foreground transition-smooth"
              aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-8 border-t border-border" role="menu">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`px-4 py-3 font-body text-xs tracking-[0.2em] uppercase transition-smooth ${
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
