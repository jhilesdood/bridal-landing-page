import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MagneticButton } from "./MagneticButton";
import { HERO_SRC, REEL_POSTER, site } from "../data/site";
import { resolveVideo } from "../lib/video";

/** A headline line that wipes up from behind a mask. */
function MaskLine({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={className}
        initial={{ y: reduced ? 0 : "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: reduced ? 0.4 : 1, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "block", willChange: "transform" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const chips = ["48-hour sneak peek", "Proposals kept secret", "Golden-hour cinema"];

export function Hero({ onOpenReel }: { onOpenReel: () => void }) {
  const reduced = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Headline drifts up + softens; the film frame lifts on a gentle parallax.
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.2]);
  const frameY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-9%"]);
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.04]);

  const reel = resolveVideo(HERO_SRC);
  // Only autoplay the ambient reel on larger screens — mobile keeps the
  // zero-byte gradient so we never push a heavy file over a cellular connection.
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const showVideo = reel.kind === "file" && !videoFailed && isDesktop && !reduced;

  const base = 0.15;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32"
    >
      {/* soft decorative amber orbs — atmosphere, not darkness */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(203,138,78,0.20),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(156,78,40,0.12),transparent_65%)] blur-2xl"
      />

      {/* ---- Top meta row ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base, duration: 0.9 }}
        className="absolute inset-x-0 top-24 mx-auto flex max-w-frame flex-wrap items-center justify-between gap-3 px-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted md:px-10"
      >
        <span className="flex items-center gap-2.5 text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-deep" />
          </span>
          {site.availability}
        </span>
        <span className="hidden sm:block">Couples Films · {site.established}</span>
        <span className="hidden md:block">Houston, TX</span>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-frame gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        {/* ---- Headline column ---- */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="lg:col-span-7"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base, duration: 0.8 }}
            className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-deep"
          >
            Cinematic couples sessions
          </motion.p>

          <h1 className="font-display font-extrabold uppercase leading-[0.85] tracking-tightest text-ink">
            <MaskLine delay={base} className="text-[clamp(3rem,11vw,9rem)]">
              Your love
            </MaskLine>
            <MaskLine delay={base + 0.12} className="text-[clamp(3rem,11vw,9rem)]">
              story, filmed
            </MaskLine>
            <MaskLine
              delay={base + 0.24}
              className="font-serif text-[clamp(3rem,11vw,9rem)] font-normal italic text-amber-deep"
            >
              like a movie.
            </MaskLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.5, duration: 0.8 }}
            className="mt-7 max-w-xl font-sans text-base leading-relaxed text-ink-soft md:text-lg"
          >
            <span className="font-serif italic text-ink">Hiles Media</span> turns your
            proposal, engagement, or reveal into a cinematic short film — with a
            sneak peek in your hands inside 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.62, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="bg-ink px-7 py-4 text-paper hover:bg-amber-deep"
            >
              <span className="flex items-center gap-2">
                Book your session
                <ArrowDown size={15} className="-rotate-45" />
              </span>
            </MagneticButton>

            <button
              type="button"
              onClick={onOpenReel}
              data-cursor="hover"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-ink"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-amber-deep group-hover:bg-amber-deep group-hover:text-paper">
                <Play size={15} className="translate-x-[1px]" fill="currentColor" />
              </span>
              Watch the reel
            </button>
          </motion.div>

          {/* trust chips */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: base + 0.8, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
          >
            {chips.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-deep" />
                {c}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---- Film-frame video column ---- */}
        <motion.div
          style={{ y: frameY }}
          initial={{ opacity: 0, scale: reduced ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: base + 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <button
            type="button"
            onClick={onOpenReel}
            data-cursor="hover"
            aria-label="Play the reel"
            className="group vignette-warm relative block aspect-video w-full overflow-hidden rounded-[1.6rem] border border-line-strong bg-sand shadow-glow-soft"
          >
            {/* art-directed backdrop — complete even with no reel file */}
            <motion.div
              style={{ scale: frameScale }}
              className="absolute inset-0 animate-drift bg-[radial-gradient(75%_70%_at_30%_20%,rgba(228,168,92,0.55),transparent_60%),radial-gradient(70%_70%_at_80%_90%,rgba(156,78,40,0.5),transparent_55%),linear-gradient(180deg,#2a2119,#140f0b)]"
            />
            {reel.kind === "file" && (
              <img
                src={REEL_POSTER}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-80"
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
                onError={() => setVideoFailed(true)}
              />
            )}

            {/* corner framing marks */}
            <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-paper/50" />
            <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-paper/50" />
            <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-paper/50" />
            <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-paper/50" />

            {/* labels */}
            <span className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-paper">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-glow" />
              Now filming · 2026
            </span>

            {/* play button */}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber text-night shadow-glow transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
              <Play size={26} className="translate-x-[2px]" fill="currentColor" />
            </span>

            <span className="absolute bottom-6 left-6 right-6 font-serif text-lg italic text-paper md:text-xl">
              A short film of the two of you.
            </span>
          </button>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#sessions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1, duration: 0.9 }}
        className="group absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-ink md:inline-flex"
      >
        <ArrowDown
          size={14}
          className="animate-bounce text-amber-deep [animation-duration:1.6s]"
        />
        Scroll
      </motion.a>
    </section>
  );
}
