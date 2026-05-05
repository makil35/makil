import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { key: "nav.univers", path: "/#univers" },
    { key: "nav.approche", path: "/#approche" },
    { key: "nav.vision", path: "/#vision" },
    { key: "nav.acces", path: "/#acces" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      role="navigation"
      aria-label={t("nav.mainAria")}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" aria-label={t("nav.home")}>
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
            <LanguageToggle className="ml-4 pl-6 border-l border-border/40" />
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
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
