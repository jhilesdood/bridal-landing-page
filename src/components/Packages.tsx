import { ArrowUpRight, Check, Clock } from "lucide-react";
import { packages } from "../data/packages";
import { cn } from "../lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Packages() {
  return (
    <section
      id="packages"
      className="relative mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal variant="clip">
          <Eyebrow index="03">Packages &amp; Pricing</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-ink">
            Simple pricing.
            <br />
            No{" "}
            <span className="font-serif text-[0.92em] font-normal italic text-amber-deep">
              surprises.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-ink-soft md:text-right md:text-base">
            Starting points below — every session is tailored to your moment,
            location, and timeline. Custom scopes always welcome.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {packages.map((p, i) => {
          const Icon = p.icon;
          const featured = p.highlighted;
          return (
            <Reveal
              key={p.id}
              delay={i * 0.1}
              className={cn(
                "relative flex flex-col rounded-[1.4rem] border transition-transform duration-500",
                featured
                  ? "border-amber-deep/40 bg-paper-2 shadow-glow-soft lg:-translate-y-3"
                  : "border-line bg-paper-2 hover:border-line-strong"
              )}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-deep px-4 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
                  Most booked
                </span>
              )}

              {/* identity + price */}
              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-full",
                      featured
                        ? "bg-amber-deep text-paper"
                        : "bg-amber-deep/10 text-amber-deep"
                    )}
                  >
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    0{i + 1} / 03
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 min-h-[2.5rem] max-w-[26ch] font-sans text-sm leading-snug text-ink-soft">
                  {p.blurb}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-ink">
                    {p.price}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {p.priceNote}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1.5">
                  <Clock size={13} className="text-amber-deep" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                    {p.turnaround}
                  </span>
                </div>
              </div>

              {/* Perforation */}
              <div className="relative py-1">
                <div className="mx-7 border-t border-dashed border-line-strong md:mx-8" />
                <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-paper" />
                <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-paper" />
              </div>

              {/* Ticket body: what's included + CTA */}
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <ul className="flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-amber-deep"
                        strokeWidth={2.4}
                      />
                      <span className="font-sans text-sm leading-snug text-ink-soft">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "group mt-8 inline-flex items-center justify-center gap-2 rounded-full py-4 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300",
                    featured
                      ? "bg-ink text-paper hover:bg-amber-deep"
                      : "border border-line-strong text-ink hover:border-amber-deep hover:text-amber-deep"
                  )}
                >
                  {p.cta}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Want to combine sessions or plan something bigger?{" "}
          <a
            href="#contact"
            className="text-amber-deep underline-offset-4 hover:underline"
          >
            Let&apos;s build a custom package →
          </a>
        </p>
      </Reveal>
    </section>
  );
}
