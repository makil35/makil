import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const home = localizedPath("home");
  const navLinks = [
    { key: "nav.profil", path: `${home}#profil` },
    { key: "nav.univers", path: `${home}#univers` },
    { key: "nav.approche", path: `${home}#approche` },
    { key: "nav.vision", path: `${home}#vision` },
    { key: "nav.acces", path: `${home}#acces` },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      role="navigation"
      aria-label={t("nav.mainAria")}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to={home}
            aria-label={t("nav.home")}
            onClick={(e) => {
              if (window.location.pathname === home) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="font-display text-xl tracking-[0.4em] uppercase text-foreground">
              MAKIL
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-12" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                role="menuitem"
                className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground"
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/40">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-3 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="px-2 pt-4">
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
