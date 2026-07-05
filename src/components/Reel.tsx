import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { HERO_SRC, REEL_POSTER } from "../data/site";
import { resolveVideo } from "../lib/video";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Reel({ onOpenReel }: { onOpenReel: () => void }) {
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();
  const reel = resolveVideo(HERO_SRC);
  const isFile = reel.kind === "file";
  // Desktop autoplays the loop; mobile shows the still poster (no heavy fetch).
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const showVideo = isFile && !failed && isDesktop;

  // The frame grows and un-rounds as it enters — a filmic reveal.
  const frameRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [reduced ? 26 : 60, 26]);

  return (
    <section
      id="reel"
      className="section-dark grain vignette relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-frame px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal variant="clip">
            <Eyebrow index="06" dark>
              The reel
            </Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-paper">
              See it in{" "}
              <span className="font-serif text-[0.92em] font-normal italic text-amber-glow">
                motion.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-paper-soft md:text-right">
              A short cut from recent couples work. The best pitch we can make is
              the work itself.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40}>
          <motion.button
            ref={frameRef}
            type="button"
            onClick={onOpenReel}
            data-cursor="hover"
            aria-label="Play showreel"
            style={{ scale, borderRadius: radius }}
            className="group vignette relative mt-12 block aspect-video w-full overflow-hidden border border-paper/15 bg-night-2"
          >
            {/* Preview / art-directed backdrop */}
            <div className="absolute inset-0 animate-drift bg-[radial-gradient(70%_70%_at_30%_20%,rgba(228,168,92,0.4),transparent_60%),radial-gradient(70%_70%_at_80%_90%,rgba(156,78,40,0.45),transparent_55%)]" />
            {isFile && (
              <img
                src={REEL_POSTER}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
            )}
            {showVideo && (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={reel.src}
                poster={REEL_POSTER}
                autoPlay
                loop
                muted
                playsInline
                onError={() => setFailed(true)}
              />
            )}

            {/* corner framing marks */}
            <span className="absolute left-5 top-5 h-6 w-6 border-l border-t border-paper/40" />
            <span className="absolute right-5 top-5 h-6 w-6 border-r border-t border-paper/40" />
            <span className="absolute bottom-5 left-5 h-6 w-6 border-b border-l border-paper/40" />
            <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-paper/40" />

            {/* labels */}
            <span className="absolute left-8 top-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-paper">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-glow" />
              Showreel · 2026
            </span>
            <span className="absolute right-8 top-8 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-soft">
              00:52
            </span>

            {/* play button */}
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber text-night shadow-glow transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
              <Play size={30} className="translate-x-[2px]" fill="currentColor" />
            </span>

            <span className="absolute bottom-7 left-8 font-display text-xl font-bold uppercase tracking-tight text-paper md:text-2xl">
              Selected couples work
            </span>
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
