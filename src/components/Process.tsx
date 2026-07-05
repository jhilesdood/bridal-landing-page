import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { process, stats } from "../data/site";
import { CountUp } from "./CountUp";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  // Vertical amber line that fills as the steps scroll through the viewport.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 70%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section
      id="process"
      className="relative mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal variant="clip">
        <Eyebrow index="05">How it works</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-ink">
          From first hello to{" "}
          <span className="font-serif text-[0.92em] font-normal italic text-amber-deep">
            final cut.
          </span>
        </h2>
      </Reveal>

      <div ref={listRef} className="relative mt-14 pl-6 md:pl-0">
        {/* progress rail (mobile-left / desktop hidden track uses first column) */}
        <div className="absolute bottom-0 left-0 top-0 w-px bg-line md:hidden">
          <motion.div
            style={{ scaleY: fill }}
            className="h-full w-full origin-top bg-amber-deep"
          />
        </div>

        {process.map((step, i) => (
          <Reveal key={step.n}>
            <div className="group relative grid grid-cols-1 items-start gap-x-6 gap-y-3 border-t border-line py-8 transition-colors duration-500 hover:bg-paper-2/70 md:grid-cols-12 md:py-10">
              {/* desktop progress dot */}
              <span className="hidden md:col-span-1 md:block">
                <span className="font-mono text-sm text-amber-deep">{step.n}</span>
              </span>
              <span className="font-mono text-sm text-amber-deep md:hidden">
                {step.n}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink md:col-span-4 md:text-3xl">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-ink-soft md:col-span-6 md:col-start-7 md:text-base">
                {step.body}
              </p>
              <ArrowRight
                size={20}
                className="hidden text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-amber-deep md:col-span-1 md:block md:justify-self-end"
              />
              {i === 0 && (
                <span className="sr-only">Numbered steps, in order</span>
              )}
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>

      {/* Stats band */}
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-paper-2 p-6 text-center md:p-8">
            <div className="font-display text-4xl font-extrabold tracking-tight text-amber-gradient md:text-6xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft md:text-[11px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
