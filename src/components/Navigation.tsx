import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SECTION_IDS = ["profil", "univers", "approche", "vision", "acces"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const home = localizedPath("home");
  const navLinks = [
    { key: "nav.profil", id: "profil" },
    { key: "nav.univers", id: "univers" },
    { key: "nav.approche", id: "approche" },
    { key: "nav.vision", id: "vision" },
    { key: "nav.acces", id: "acces" },
  ];

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    if (window.location.pathname !== home) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `${home}#${id}`);
  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-elegant ${
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
      role="navigation"
      aria-label={t("nav.mainAria")}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className={`flex items-center justify-between transition-elegant ${scrolled ? "h-16" : "h-20"}`}>
          <Link
            to={home}
            aria-label={t("nav.home")}
            onClick={(e) => {
              setIsOpen(false);
              if (window.location.pathname === home) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="font-display text-xl tracking-[0.4em] uppercase text-foreground">MAKIL</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`${home}#${link.id}`}
                onClick={(e) => handleAnchor(e, link.id)}
                aria-current={active === link.id ? "true" : undefined}

                className={`font-body text-[11px] tracking-[0.3em] uppercase transition-smooth ${
                  active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
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
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-background transition-[opacity,visibility] duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`${home}#${link.id}`}
              onClick={(e) => handleAnchor(e, link.id)}

              style={{ transitionDelay: isOpen ? `${120 + i * 70}ms` : "0ms" }}
              className={`py-5 font-display text-2xl text-foreground transition-[opacity,transform] duration-700 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
