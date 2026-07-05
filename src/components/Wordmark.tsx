import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useScrollVelocity } from "../hooks/useScrollVelocity";

/**
 * Kinetic type band: two oversized lines slide in opposite directions as the
 * section crosses the viewport, and skew slightly with scroll momentum. A
 * palate-cleanser between "what we film" and pricing. Static under
 * reduced-motion.
 */
export function Wordmark() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { skew } = useScrollVelocity();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["8%", "-14%"]
  );
  const xBottom = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-12%", "10%"]
  );

  return (
    <section
      ref={ref}
      aria-hidden
      className="relative select-none overflow-hidden border-y border-line bg-paper-2 py-14 md:py-20"
    >
      <motion.div style={{ skewX: skew }}>
        <motion.div
          style={{ x: xTop }}
          className="text-ink-gradient whitespace-nowrap text-center font-display text-[11.5vw] font-extrabold uppercase leading-[0.9] tracking-tightest"
        >
          Every love story
        </motion.div>
        <motion.div
          style={{ x: xBottom }}
          className="text-amber-gradient whitespace-nowrap text-center font-display text-[11.5vw] font-extrabold uppercase leading-[0.9] tracking-tightest"
        >
          deserves a film
        </motion.div>
      </motion.div>
    </section>
  );
}
