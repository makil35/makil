interface SignatureProps {
  className?: string;
  /** Accessible label; rendered visually hidden. */
  label?: string;
}

/**
 * Discreet handwritten signature mark, drawn as a single stroke.
 * Uses currentColor so it inherits the surrounding text token.
 */
const Signature = ({ className = "", label = "Signature of Makil-Herrero Richard" }: SignatureProps) => (
  <svg
    viewBox="0 0 320 90"
    role="img"
    aria-label={label}
    className={`h-12 w-auto text-foreground/70 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 66c6-22 12-38 15-44 3-6 6-4 6 2 0 8-4 21-9 33-2 5-1 7 2 6 6-2 12-9 18-19 4-7 8-11 9-8 1 3-2 9-5 14-2 4-1 6 2 5 5-2 10-8 14-14" />
    <path d="M64 52c5-1 11-4 15-8 3-3 3-6 0-6-4 0-9 5-12 11-3 6-2 11 3 12 6 1 13-3 20-11" />
    <path d="M104 62c4-14 8-24 11-29 2-4 4-3 4 1 0 5-3 15-6 23" />
    <path d="M120 48c6-6 12-10 16-10 3 0 4 2 3 6-2 6-6 14-8 20" />
    <path d="M146 66c14-6 27-16 36-27 5-6 6-11 3-12-4-1-9 5-13 15-4 11-3 21 4 24 8 3 18-3 27-14" />
    <path d="M212 40c-4 12-7 20-8 26 0 4 2 5 5 2 6-6 12-16 16-24 2-4 4-4 4 1 0 6-2 14-4 21" />
    <path d="M240 56c8-2 16-7 21-13 3-4 2-7-2-6-6 2-12 10-14 18-1 6 2 9 8 8 9-2 20-11 31-25" />
    <path d="M28 78c62 6 168 3 264-10" strokeWidth={0.9} opacity={0.45} />
  </svg>
);

export default Signature;
