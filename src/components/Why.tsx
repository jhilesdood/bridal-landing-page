import { valueProps } from "../data/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section
      id="why"
      className="relative mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <Reveal variant="clip" className="lg:col-span-7">
          <Eyebrow index="01">Why Hiles Media</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-ink">
            Anyone can record it.
            <br />
            We make it{" "}
            <span className="font-serif text-[0.92em] font-normal italic text-amber-deep">
              cinematic.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="max-w-md font-sans text-base leading-relaxed text-ink-soft md:text-lg">
            The moment only happens once. We treat it like a film — planned,
            beautifully lit, and cut into something you&apos;ll actually want to
            watch again and again.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="group relative bg-paper-2 p-7 transition-colors duration-500 hover:bg-sand md:p-8"
            >
              <span className="mb-14 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-deep/10 text-amber-deep transition-colors duration-500 group-hover:bg-amber-deep group-hover:text-paper">
                <Icon size={20} strokeWidth={1.6} />
              </span>
              <span className="pointer-events-none absolute right-6 top-6 font-mono text-xs text-muted">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl font-bold text-ink">
                {p.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
