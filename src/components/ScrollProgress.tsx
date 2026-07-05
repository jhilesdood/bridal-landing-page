import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin fixed reading-progress rail across the very top of the page.
 * Driven by page scroll; spring-smoothed so it glides with Lenis.
 * Purely decorative — hidden from assistive tech.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-amber-deep via-amber to-amber-glow"
    />
  );
}
