import { testimonials } from "../data/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-line bg-paper-2 py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-frame px-5 md:px-10">
        <Reveal variant="clip">
          <Eyebrow index="07">Loved by couples</Eyebrow>
        </Reveal>

        {/* Featured quote */}
        <Reveal delay={0.08} variant="blur">
          <figure className="mt-10 max-w-4xl">
            <span
              aria-hidden
              className="font-serif text-[6rem] leading-none text-amber-deep/30"
            >
              &ldquo;
            </span>
            <blockquote className="-mt-8 font-serif text-[clamp(1.7rem,4vw,3rem)] font-normal italic leading-[1.15] text-ink">
              {lead.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="h-px w-8 bg-amber-deep" />
              <span className="text-ink-soft">{lead.name}</span>
              <span>· {lead.role}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Supporting quotes */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {rest.map((t, i) => (
            <Reveal
              key={t.role}
              delay={i * 0.1}
              className="rounded-2xl border border-line bg-paper p-7 md:p-8"
            >
              <blockquote className="font-sans text-base leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-deep" />
                <span className="text-ink-soft">{t.name}</span>
                <span>· {t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
