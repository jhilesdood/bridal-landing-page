import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sessionTypes } from "../data/sessions";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Sessions() {
  const [active, setActive] = useState(0);
  const current = sessionTypes[active];
  const CurrentIcon = current.icon;

  return (
    <section
      id="sessions"
      className="relative mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal variant="clip">
          <Eyebrow index="02">What we film</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-ink">
            Four kinds of{" "}
            <span className="font-serif text-[0.92em] font-normal italic text-amber-deep">
              yes.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-ink-soft md:text-right md:text-base">
            One studio for every chapter — the question, the announcement, the
            growing family, and the years that follow.
          </p>
        </Reveal>
      </div>

      {/* ---------- Desktop: sticky scroll-through ---------- */}
      <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-2">
        {/* Sticky media panel */}
        <div className="relative">
          <div className="sticky top-24 h-[76vh] max-h-[720px]">
            <div className="vignette relative h-full w-full overflow-hidden rounded-[1.8rem] border border-line-strong bg-night-2 shadow-glow-soft">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              {/* scrim keeps the caption legible over any frame */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/25 to-night/45" />

              {/* corner marks */}
              <span className="absolute left-5 top-5 h-7 w-7 border-l border-t border-paper/50" />
              <span className="absolute right-5 top-5 h-7 w-7 border-r border-t border-paper/50" />
              <span className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-paper/50" />
              <span className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-paper/50" />

              {/* live caption */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-paper">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-glow" />
                    {current.tag}
                  </span>
                  <span className="text-paper-soft">
                    0{active + 1} / 0{sessionTypes.length}
                  </span>
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber text-night">
                        <CurrentIcon size={22} strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-5 font-display text-4xl font-extrabold uppercase tracking-tightest text-paper">
                        {current.title}
                      </h3>
                      <p className="mt-2 font-serif text-xl italic text-amber-glow">
                        {current.kicker}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* progress dots */}
                  <div className="mt-6 flex gap-2">
                    {sessionTypes.map((s, i) => (
                      <span
                        key={s.id}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === active ? "w-8 bg-amber-glow" : "w-3 bg-paper/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling text blocks drive the active index */}
        <div>
          {sessionTypes.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="flex min-h-[76vh] flex-col justify-center border-b border-line py-10 last:border-b-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                    <span className="text-amber-deep">0{i + 1}</span>
                    <span className="h-px w-8 bg-line-strong" />
                    {s.tag}
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-deep/10 text-amber-deep">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <h3 className="font-display text-4xl font-extrabold uppercase tracking-tightest text-ink">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                  <ul className="mt-6 grid max-w-md grid-cols-2 gap-x-6 gap-y-2.5">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 font-sans text-sm text-ink-soft"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-deep" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ---------- Mobile: stacked cards ---------- */}
      <div className="mt-12 space-y-6 lg:hidden">
        {sessionTypes.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.id}
              variant="blur"
              className="overflow-hidden rounded-[1.4rem] border border-line bg-paper-2"
            >
              <div className="vignette relative flex aspect-[16/10] items-end overflow-hidden p-6">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/35 to-night/40" />
                <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-soft">
                  0{i + 1} / 0{sessionTypes.length}
                </span>
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber text-night">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tightest text-paper">
                    {s.title}
                  </h3>
                  <p className="font-serif text-base italic text-amber-glow">
                    {s.kicker}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="font-sans text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 font-sans text-sm text-ink-soft"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-deep" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
