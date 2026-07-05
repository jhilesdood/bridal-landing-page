import { Zap } from "lucide-react";
import { delivery } from "../data/site";
import { cn } from "../lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Delivery() {
  return (
    <section
      id="delivery"
      className="relative overflow-hidden border-y border-line bg-sand py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-frame px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal variant="clip" className="lg:col-span-7">
            <Eyebrow index="04">Delivery</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-ink">
              A peek in 48 hours.
              <br />
              A film to{" "}
              <span className="font-serif text-[0.92em] font-normal italic text-amber-deep">
                keep forever.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex items-start gap-4 rounded-2xl border border-amber-deep/30 bg-amber-deep/5 p-5">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-deep text-paper">
                <Zap size={18} fill="currentColor" />
              </span>
              <p className="font-sans text-sm leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">Announcing today?</span>{" "}
                Same-day and next-morning rush edits are available on request — just
                ask when you book and we&apos;ll build it into your timeline.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {delivery.map((step, i) => {
            const last = i === delivery.length - 1;
            return (
              <Reveal key={step.title} delay={i * 0.08} className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-deep/30" />
                    <span className="relative h-2 w-2 rounded-full bg-amber-deep" />
                  </span>
                  <span
                    className={cn(
                      "h-px flex-1",
                      last
                        ? "bg-gradient-to-r from-amber-deep/50 to-transparent"
                        : "bg-line-strong"
                    )}
                  />
                </div>
                <div className="mt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-deep">
                    {step.when}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] font-sans text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
