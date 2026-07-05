import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";
import { cn } from "../lib/cn";

function Wordmark({
  onClick,
  dark = false,
}: {
  onClick?: () => void;
  dark?: boolean;
}) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-amber-deep text-paper transition-transform duration-500 group-hover:rotate-90">
        <span className="h-2 w-2 rounded-[1px] bg-paper" />
      </span>
      <span
        className={cn(
          "font-display text-lg font-extrabold uppercase tracking-tightest",
          dark ? "text-paper" : "text-ink"
        )}
      >
        Hiles<span className="text-amber-deep">.</span>Media
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-frame items-center justify-between px-5 py-4 md:px-10">
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
              >
                <span className="mr-1.5 text-muted">0{i + 1}</span>
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber-deep transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-paper transition-colors duration-300 hover:bg-amber-deep sm:inline-flex"
            >
              Book a session
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-amber-deep hover:text-amber-deep lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — dark cinematic panel for contrast */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="grain section-dark fixed inset-0 z-[130] flex flex-col px-5 py-4 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <Wordmark dark onClick={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="flex items-baseline justify-between border-b border-paper/10 py-4 font-display text-4xl font-bold uppercase tracking-tightest text-paper"
                >
                  {l.label}
                  <span className="font-mono text-xs text-paper-soft">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 font-mono text-xs uppercase tracking-widest text-night"
            >
              Book a session
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
