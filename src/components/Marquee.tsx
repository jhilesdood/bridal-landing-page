import { motion } from "framer-motion";
import { momentTypes } from "../data/site";
import { useScrollVelocity } from "../hooks/useScrollVelocity";

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track animate-marquee" aria-hidden={ariaHidden}>
      {momentTypes.map((t, i) => (
        <span key={`${t}-${i}`} className="flex items-center">
          <span className="px-6 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-6xl">
            {t}
          </span>
          <span className="text-amber-deep md:text-2xl" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  // The track skews slightly with scroll momentum, then springs back to rest.
  const { skew } = useScrollVelocity();

  return (
    <section
      aria-label="Moments we film"
      className="relative overflow-hidden border-y border-line bg-sand py-6 md:py-8"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sand to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sand to-transparent md:w-32" />

      <motion.div style={{ skewX: skew }} className="flex whitespace-nowrap">
        <Row />
        <Row ariaHidden />
      </motion.div>
    </section>
  );
}
