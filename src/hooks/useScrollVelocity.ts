import {
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Scroll-velocity primitives for velocity-reactive motion (marquee skew,
 * kinetic wordmark). Built on Framer's useScroll — Lenis drives window.scrollY,
 * so this stays in sync with the smooth-scroll without a shared instance.
 *
 * Returns spring-smoothed MotionValues:
 *   • skew  — degrees of X-skew, eases back to 0 at rest (±4°)
 *   • boost — 1 at rest, up to ~1.6 on fast scroll (for animation speed-up)
 * Both collapse to a constant under prefers-reduced-motion.
 */
export function useScrollVelocity(): {
  skew: MotionValue<number>;
  boost: MotionValue<number>;
} {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, {
    stiffness: 300,
    damping: 50,
    mass: 0.7,
  });

  const skewRange = reduced ? 0 : 4;
  const boostMax = reduced ? 1 : 1.6;

  const skew = useTransform(
    smooth,
    [-2200, 0, 2200],
    [-skewRange, 0, skewRange],
    { clamp: true }
  );
  const boost = useTransform(
    smooth,
    [-3000, 0, 3000],
    [boostMax, 1, boostMax],
    { clamp: true }
  );

  return { skew, boost };
}
