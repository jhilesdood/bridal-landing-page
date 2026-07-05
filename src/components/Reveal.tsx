import { motion } from "framer-motion";
import type { Target, TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Variant = "rise" | "clip" | "blur";

interface RevealProps {
  children: ReactNode;
  /** delay in seconds */
  delay?: number;
  /** distance travelled on the y-axis (rise variant) */
  y?: number;
  /** entrance style — rise (default), clip-wipe up, or blur-in */
  variant?: Variant;
  className?: string;
  as?: "div" | "span" | "li";
}

/**
 * Scroll-triggered entrance. Fires once when ~12% enters the viewport.
 * Collapses to a plain fade (no movement/blur) under prefers-reduced-motion.
 *
 * Variants share one easing/duration vocabulary so every section enters with
 * the same rhythm:
 *   • rise — fade + upward translate (default)
 *   • clip — reveals from behind a bottom-up clip mask (editorial wipe)
 *   • blur — fade + de-blur + slight rise (soft, filmic)
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  variant = "rise",
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  // Collapse the motion[as] union to a single component type — passing computed
  // objects through the full union blows up TS (union too complex to represent).
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Record<
    Variant,
    { initial: Target; animate: TargetAndTransition }
  > = {
    rise: {
      initial: { opacity: 0, y: reduced ? 0 : y },
      animate: { opacity: 1, y: 0 },
    },
    clip: {
      initial: {
        opacity: reduced ? 0 : 1,
        y: reduced ? 0 : y * 0.6,
        clipPath: reduced ? "inset(0% 0 0% 0)" : "inset(0% 0 100% 0)",
      },
      animate: { opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" },
    },
    blur: {
      initial: {
        opacity: 0,
        y: reduced ? 0 : y * 0.5,
        filter: reduced ? "blur(0px)" : "blur(12px)",
      },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
  };

  const v = variants[variant];

  return (
    <MotionTag
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: reduced ? 0.3 : 0.85,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
