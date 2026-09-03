import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/lib/routes";
import { journalArticles } from "@/content/journal";
import { scrollToSection } from "@/lib/scrollToSection";

const LongArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 12" fill="none" className={className} aria-hidden="true">
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
  const home = localizedPath("home");
  const navigate = useNavigate();

  // Anchor links must land on section content, not on the large editorial
  // top padding (which reads as a blank/black screen).
  const goToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (window.location.pathname === home) {
      scrollToSection(id);
      window.history.replaceState(null, "", `${home}#${id}`);
    } else {
      // ScrollToTop handles the hash once the home route has mounted.
      navigate(`${home}#${id}`);
    }
  };

  // A link to the page you are already on must still feel like a move:
  // return to the top instead of doing nothing.
  const goToPage = (e: React.MouseEvent, to: string) => {
    if (window.location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const practice = [
    { label: t("nav.profil"), to: `${home}#richard` },
    { label: t("nav.univers"), to: `${home}#signature` },
    { label: t("nav.approche"), to: `${home}#approach` },
    { label: t("nav.mandates"), to: `${home}#mandates` },
    { label: t("nav.vision"), to: `${home}#vision` },
    { label: t("nav.principles"), to: `${home}#principles` },
    { label: t("nav.acces"), to: `${home}#access` },
  ];

  return (
    <footer className="bg-background">
      {/* Access banner — a single, quiet entry point */}
      <div className="border-t border-foreground/10">
        <div className="container mx-auto px-6 lg:px-10">
          <Link
            to="/contact"
            className="group flex flex-col sm:flex-row items-center justify-between gap-6 py-12 sm:py-16"
          >
            <span className="text-[11px] font-body tracking-[0.4em] uppercase text-foreground/60 transition-smooth group-hover:text-foreground">
              {t("footer.makilPrivate")}
            </span>

            <span className="inline-flex items-center gap-4 text-[10px] font-body tracking-[0.35em] uppercase text-foreground/40 transition-smooth group-hover:text-foreground/80">
              {t("footer.discoverExperiences")}
              <span className="relative flex items-center justify-center w-10 h-10 border border-foreground/10 rounded-full transition-smooth group-hover:border-foreground/40 group-hover:scale-105">
                <LongArrow className="w-5 h-5 text-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="border-t border-foreground/10 overflow-hidden" aria-hidden="true">
        <div className="container mx-auto px-6 lg:px-10">
          <p className="py-10 sm:py-14 font-display text-center text-[18vw] sm:text-[14vw] leading-none tracking-[0.08em] text-foreground/[0.06] select-none">
            MAKIL
          </p>
        </div>
      </div>

      {/* Sitemap */}
      <div className="border-t border-foreground/10">
        <div className="container mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-display text-sm tracking-[0.4em] uppercase text-foreground hover:opacity-70 transition-smooth"
                aria-label={t("nav.home")}
              >
                MAKIL
              </button>
            </div>

            <nav aria-label={t("nav.mainAria")} className="space-y-4">
              <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground/70">
                The practice
              </p>
              <ul className="space-y-3">
                {practice.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={(e) => goToSection(e, l.to.split("#")[1])}
                      className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Journal" className="space-y-4">
              <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground/70">
                Journal
              </p>
              <ul className="space-y-3">
                {journalArticles.slice(0, 3).map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/journal/${a.slug}`}
                      className="text-[11px] font-body leading-relaxed text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/journal"
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-smooth"
                  >
                    All notes
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Contact and information" className="space-y-4">
              <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground/70">
                Contact & information
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground transition-smooth"
                  >
                    {t("contact.kicker")}
                  </Link>
                </li>
                <li>
                    <Link
                      to={`${home}#access`}
                      onClick={(e) => goToSection(e, "access")}
                      className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {t("nav.acces")}
                    </Link>
                </li>
                <li>
                  <Link
                    to={localizedPath("legal")}
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {t("footer.legal")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={localizedPath("privacy")}
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Elsewhere" className="space-y-4">
              <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground/70">
                Elsewhere
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.linkedin.com/in/richardmakilherrero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@makilprivate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/makilprivate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/richardmakilherrero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <p className="mt-20 border-t border-foreground/10 pt-8 text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} MAKIL · {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
