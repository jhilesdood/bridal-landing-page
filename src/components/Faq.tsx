import { Plus } from "lucide-react";
import { faqs, site } from "../data/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative mx-auto max-w-frame px-5 py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal variant="clip" className="lg:col-span-4">
          <Eyebrow index="08">FAQ</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold uppercase leading-[0.9] tracking-tightest text-ink">
            Questions,
            <br />
            <span className="font-serif text-[0.9em] font-normal italic text-amber-deep">
              answered.
            </span>
          </h2>
          <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-ink-soft">
            Still wondering about something? We&apos;re happy to help.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-amber-deep underline-offset-4 hover:underline"
          >
            Email us directly →
          </a>
        </Reveal>

        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-bold text-ink transition-colors group-open:text-amber-deep md:text-xl">
                  {f.q}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors group-open:border-amber-deep group-open:text-amber-deep">
                  <Plus
                    size={16}
                    className="transition-transform duration-300 group-open:rotate-45"
                  />
                </span>
              </summary>
              <div className="max-w-2xl pb-7 pr-4 font-sans text-sm leading-relaxed text-ink-soft md:text-base">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
