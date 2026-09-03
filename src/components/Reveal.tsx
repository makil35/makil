import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}

/**
 * Editorial scroll reveal: a restrained fade + rise.
 * Respects prefers-reduced-motion and never leaves content hidden after an
 * anchor jump (the reveal is opacity-only in that case, so layout never shifts).
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

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    // Reveal slightly before the block enters the viewport so anchor jumps
    // never land on an invisible section.
    const inRange = () => {
      const rect = node.getBoundingClientRect();
      const margin = window.innerHeight * 0.35;
      return rect.top < window.innerHeight + margin && rect.bottom > -margin;
    };

    if (inRange()) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting || e.intersectionRatio > 0)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "35% 0px 35% 0px" },
    );
    observer.observe(node);

    // Anchor navigation and programmatic scrolls ask for a re-check.
    const onCheck = () => {
      if (inRange()) {
        show();
        observer.disconnect();
      }
    };
    window.addEventListener("makil:reveal-check", onCheck);

    return () => {
      window.removeEventListener("makil:reveal-check", onCheck);
      observer.disconnect();
    };
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
