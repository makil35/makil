import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}

/**
 * Editorial scroll reveal: a restrained fade + rise.
 * Respects prefers-reduced-motion.
 */
const Reveal = ({ children, delay = 0, className = "", as = "div" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    // Already on screen at mount (deep link / anchor jump): show immediately.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);

    // Safety net: never leave content invisible (e.g. anchor jumps, tall blocks)
    const fallback = window.setTimeout(() => setVisible(true), 500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };

  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
