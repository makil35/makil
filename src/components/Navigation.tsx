import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Événements", path: "/evenements" },
    { name: "Galerie", path: "/galerie" },
    { name: "Membres Premium", path: "/membres" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-primary/20" role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Makil Business Club - Retour à l'accueil">
            <div className="text-2xl font-display font-bold text-gradient-gold">
              MAKIL
            </div>
            <div className="hidden sm:block text-sm font-body text-primary border-l border-primary/30 pl-2">
              Business Club
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
                className={`px-4 py-2 rounded-md font-body text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-background hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-foreground font-body font-semibold shadow-gold transition-smooth"
            >
              <Link to="/contact">Devenir Membre</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary hover:text-primary/80 transition-smooth"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-primary/20" role="menu">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`px-4 py-3 rounded-md font-body text-sm font-medium transition-smooth ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-background hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-foreground font-body font-semibold"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Devenir Membre
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
