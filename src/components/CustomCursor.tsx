import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * A soft amber ring that trails the cursor, growing over interactive targets.
 * Mounts only on fine-pointer (mouse) devices and never under reduced motion,
 * so touch users and accessibility settings are untouched.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest?.('a, button, [data-cursor="hover"], input, textarea, summary')
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* precise inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-amber-glow"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full border border-amber/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          height: 34,
          width: 34,
          opacity: visible ? (hovering ? 1 : 0.6) : 0,
          scale: hovering ? 1.7 : 1,
          backgroundColor: hovering ? "rgba(203,138,78,0.12)" : "transparent",
        }}
        transition={{ scale: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
      />
    </>
  );
}
