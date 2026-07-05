import { useState } from "react";
import {
  ArrowUpRight,
  CalendarClock,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { site, socials } from "../data/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

// Swap for your real scheduling link (Calendly, Cal.com, etc.).
const BOOKING_CALL_URL = "https://calendly.com/";

const SESSION_TYPES = [
  "Proposal",
  "Engagement",
  "Gender / Baby Reveal",
  "Anniversary Film",
  "Multiple / Not sure yet",
  "Other",
];

// text-base (16px) on mobile prevents iOS Safari's zoom-on-focus; 14px on desktop.
const fieldClass =
  "w-full rounded-xl border border-paper/12 bg-night-2 px-4 py-3.5 font-sans text-base text-paper placeholder:text-muted transition-colors focus:border-amber-glow focus:outline-none md:text-sm";
const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-paper-soft";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    partner: "",
    email: "",
    date: "",
    type: "Proposal",
    location: "",
    details: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const couple =
      form.name && form.partner
        ? `${form.name} & ${form.partner}`
        : form.name || "New inquiry";
    const subject = `Couples session inquiry — ${couple}`;
    const body = [
      `Name: ${form.name}`,
      `Partner's name: ${form.partner}`,
      `Email: ${form.email}`,
      `Session type: ${form.type}`,
      `Preferred date: ${form.date}`,
      `Location / area: ${form.location}`,
      "",
      "Tell us the story:",
      form.details,
    ].join("\n");
    window.location.href = `mailto:${site.inquiryRecipients.join(
      ","
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="section-dark grain relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto grid max-w-frame gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: pitch + details */}
        <div className="lg:col-span-5">
          <Reveal variant="clip">
            <Eyebrow index="09" dark>
              Book your session
            </Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.86] tracking-tightest text-paper">
              Let&apos;s film
              <br />
              something worth
              <br />
              <span className="font-serif text-[0.82em] font-normal italic text-amber-glow">
                rewatching.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md font-sans text-base leading-relaxed text-paper-soft">
              Tell us about your moment and we&apos;ll reply within one business
              day with availability and a tailored quote. Planning a surprise? We
              keep it between us.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 space-y-1">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 border-t border-paper/10 py-4 text-paper transition-colors hover:text-amber-glow"
              >
                <Mail size={16} className="text-amber-glow" />
                <span className="font-sans text-sm md:text-base">
                  {site.email}
                </span>
                <ArrowUpRight
                  size={15}
                  className="ml-auto text-paper-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-glow"
                />
              </a>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="group flex items-center gap-3 border-t border-paper/10 py-4 text-paper transition-colors hover:text-amber-glow"
              >
                <Phone size={16} className="text-amber-glow" />
                <span className="font-sans text-sm md:text-base">
                  {site.phone}
                </span>
              </a>
              <div className="flex items-center gap-3 border-y border-paper/10 py-4 text-paper-soft">
                <MapPin size={16} className="text-amber-glow" />
                <span className="font-sans text-sm md:text-base">
                  {site.serving}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={BOOKING_CALL_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-paper/20 px-6 py-3.5 font-mono text-[11px] uppercase tracking-widest text-paper transition-colors hover:border-amber-glow hover:text-amber-glow"
            >
              <CalendarClock size={16} className="text-amber-glow" />
              Prefer to talk? Book a call
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-soft transition-colors hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: inquiry form */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-[1.6rem] border border-paper/10 bg-night-2/50 p-6 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="c-name"
                  required
                  autoComplete="given-name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jamie"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="c-partner" className={labelClass}>
                  Partner&apos;s name
                </label>
                <input
                  id="c-partner"
                  value={form.partner}
                  onChange={update("partner")}
                  placeholder="Alex"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="c-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="c-type" className={labelClass}>
                  Session type
                </label>
                <div className="relative">
                  <select
                    id="c-type"
                    value={form.type}
                    onChange={update("type")}
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    {SESSION_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-night text-paper">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-paper-soft"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-date" className={labelClass}>
                  Preferred date
                </label>
                <input
                  id="c-date"
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className={`${fieldClass} [color-scheme:dark]`}
                />
              </div>
              <div>
                <label htmlFor="c-location" className={labelClass}>
                  Location / area
                </label>
                <input
                  id="c-location"
                  value={form.location}
                  onChange={update("location")}
                  placeholder="Houston, TX"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="c-details" className={labelClass}>
                Tell us the story
              </label>
              <textarea
                id="c-details"
                rows={4}
                value={form.details}
                onChange={update("details")}
                placeholder="How you met, what you're planning, whether it's a surprise, ideas for a location…"
                className={`${fieldClass} resize-none`}
              />
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-night transition-colors duration-300 hover:bg-amber-glow"
              >
                Send inquiry
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-soft">
                {sent
                  ? "Opening your email app…"
                  : "Replies within 1 business day"}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
