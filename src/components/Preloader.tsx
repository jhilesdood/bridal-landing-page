import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { site } from "../data/site";

/**
 * A brief branded intro: a count from 00 → 100 with an amber progress rule,
 * then the panel wipes up to reveal the hero. Under reduced motion it clears
 * almost immediately.
 */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = reduced ? 250 : 1150;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onComplete, reduced ? 0 : 220);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onComplete]);

  return (
    <motion.div
      className="grain fixed inset-0 z-[300] flex flex-col justify-between overflow-hidden bg-night px-5 py-6 md:px-10 md:py-8"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: reduced ? 0.3 : 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
        <span>{site.name}</span>
        <span>{site.established}</span>
      </div>

      <div className="flex flex-1 items-center">
        <h1 className="font-display text-[13vw] font-extrabold uppercase leading-[0.85] tracking-tightest text-paper md:text-[11vw]">
          Love
          <br />
          <span className="font-serif font-normal italic text-amber-glow">
            Stories
          </span>
        </h1>
      </div>

      <div>
        <div className="mb-3 h-px w-full bg-paper/10">
          <motion.div
            className="h-px w-full origin-left bg-amber-glow"
            style={{ scaleX: count / 100 }}
          />
        </div>
        <div className="flex items-end justify-between">
          <span className="max-w-[18ch] font-sans text-xs text-paper-soft md:text-sm">
            Cinematic films for the moments that matter most.
          </span>
          <span className="font-mono text-4xl tabular-nums text-paper md:text-6xl">
            {String(count).padStart(3, "0")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
