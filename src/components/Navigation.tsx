import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/logo-makil.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.cercle"), path: "/cercle-exception" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-primary/10" role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="Makil Conciergerie - Retour à l'accueil">
            <img src={logo} alt="Makil" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="text-xs font-body tracking-[0.3em] uppercase text-primary">
                Conciergerie
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                role="menuitem"
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`px-4 py-2 rounded-md font-body text-xs tracking-wider uppercase transition-smooth ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-background/60 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSelector />
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/30 bg-transparent hover:bg-primary/10 text-primary font-body text-xs tracking-wider uppercase transition-smooth"
            >
              <Link to="/contact">{t("nav.discover")}</Link>
            </Button>
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <LanguageSelector />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary/80 transition-smooth"
              aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-6 border-t border-primary/10" role="menu">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`px-4 py-3 font-body text-xs tracking-wider uppercase transition-smooth ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-background/60 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 bg-transparent hover:bg-primary/10 text-primary font-body text-xs tracking-wider uppercase"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    {t("nav.discover")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
