import { ArrowUp } from "lucide-react";
import { navLinks, site, socials } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark grain relative overflow-hidden border-t border-paper/10 pt-16 md:pt-20">
      <div className="relative z-10 mx-auto max-w-frame px-5 md:px-10">
        {/* CTA + columns */}
        <div className="grid gap-10 border-b border-paper/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 font-display text-3xl font-extrabold uppercase tracking-tightest text-paper transition-colors hover:text-amber-glow md:text-4xl"
            >
              Book your session
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber text-night transition-transform duration-500 group-hover:rotate-45">
                <ArrowUp size={18} className="rotate-45" />
              </span>
            </a>
            <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-paper-soft">
              Cinematic films for proposals, engagements, reveals, and
              anniversaries. Based in {site.location}, traveling for the moments
              that matter.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-soft">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-paper-soft transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-soft">
              Follow
            </h4>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-sm text-paper-soft transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark — sized to the container so every letter fits at any width */}
        <div className="pointer-events-none select-none py-8 [container-type:inline-size]">
          <div className="whitespace-nowrap bg-gradient-to-b from-paper-soft via-muted to-transparent bg-clip-text text-center font-display text-[17cqw] font-extrabold uppercase leading-none tracking-tightest text-transparent">
            Hiles Media
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/10 py-7 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-soft">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-soft">
            Set in Bricolage, Fraunces &amp; Space Mono
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper-soft transition-colors hover:text-amber-glow"
          >
            Back to top
            <ArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
