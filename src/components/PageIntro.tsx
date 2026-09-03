import { Link } from "react-router-dom";
import { localizedPath } from "@/lib/routes";

interface Crumb {
  label: string;
  to?: string;
}

/**
 * Minimal editorial breadcrumb: always offers a way back, never decorated.
 */
const PageIntro = ({ crumbs }: { crumbs?: Crumb[] }) => (
  <nav
    aria-label="Breadcrumb"
    className="flex flex-wrap items-center gap-3 text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground"
  >
    <Link to={localizedPath("home")} className="hover:text-foreground transition-smooth">
      Makil
    </Link>
    {(crumbs ?? []).map((c) => (
      <span key={c.label} className="flex items-center gap-3">
        <span aria-hidden="true" className="opacity-40">
          /
        </span>
        {c.to ? (
          <Link to={c.to} className="hover:text-foreground transition-smooth">
            {c.label}
          </Link>
        ) : (
          <span className="text-foreground/60">{c.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default PageIntro;
