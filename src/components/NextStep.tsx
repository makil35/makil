import { Link } from "react-router-dom";

export interface NextStepLink {
  kicker: string;
  label: string;
  to: string;
}

/**
 * Editorial end-of-page continuation: two quiet, large links so a visitor
 * never reaches a dead end.
 */
const NextStep = ({ links }: { links: NextStepLink[] }) => (
  <nav
    aria-label="Continue through the house"
    className="mt-24 border-t border-foreground/10 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
  >
    {links.map((l) => (
      <Link key={l.to} to={l.to} className="group block">
        <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
          {l.kicker}
        </p>
        <p className="mt-3 flex items-baseline gap-4 font-display text-2xl text-foreground/80 transition-smooth group-hover:text-foreground">
          {l.label}
          <span
            aria-hidden="true"
            className="text-base transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </Link>
    ))}
  </nav>
);

export default NextStep;
