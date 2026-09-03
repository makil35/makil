import signatureAsset from "@/assets/signature-richard.png.asset.json";

interface SignatureProps {
  className?: string;
  /** Accessible label. */
  label?: string;
}

/**
 * Handwritten signature of Makil-Herrero Richard.
 */
const Signature = ({ className = "", label = "Signature of Makil-Herrero Richard" }: SignatureProps) => (
  <img
    src={signatureAsset.url}
    alt={label}
    loading="lazy"
    decoding="async"
    className={`h-12 w-auto select-none ${className}`}
  />
);

export default Signature;
