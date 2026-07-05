# Hiles Media — Couples Sessions Landing Page

A light, editorial-**cinematic**, mobile-first landing page whose one job is to
get couples to **book Hiles Media** for their **proposal, engagement, baby /
gender reveal, or anniversary film**. Warm paper canvas, giant display type,
film grain, and award-winning scroll animations — with two intentional dark
cinematic bands (the Reel and the Contact section) for contrast.

Built to match the Hiles Media brand: amber accent (`#CB8A4E`, with
`#9C4E28` for accent text on paper) and the Bricolage / Fraunces / Instrument /
Space Mono type system shared with the main site.

## Stack
- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (tokens in `tailwind.config.ts` + `src/index.css`)
- **Framer Motion** (hero mask reveals, scroll-linked parallax, sticky
  scroll-through, kinetic wordmark, velocity-reactive marquee, count-ups)
- **Lenis** (momentum smooth scroll — disabled under reduced motion)
- **lucide-react** (icons)

Fonts (Google Fonts, loaded in `index.html`): **Bricolage Grotesque** (display),
**Fraunces** italic (accents), **Instrument Sans** (body), **Space Mono** (labels).

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Sections
Preloader → Nav → Hero (framed reel) → Moments marquee → Why → **What we film
(sticky scroll-through of the 4 session types)** → Kinetic wordmark →
**Packages / Pricing** → Delivery timeline → Process + stats → **Reel (dark
band)** → Testimonials → FAQ → **Booking form (dark band)** → Footer.

## Award-winning scroll motion
`src/hooks/useScrollVelocity.ts` + `ScrollProgress.tsx` drive: a top progress
rail, hero parallax/blur-out, a sticky "What we film" panel that changes as the
4 sessions scroll past, a kinetic wordmark that slides against scroll, a Process
progress line that fills, a Reel frame that scales up on entry, and a marquee
that skews with scroll momentum. All gated behind `prefers-reduced-motion`, and
heavy pinning is desktop-only.

## Making it yours (placeholders to swap)
- **The reel + poster** — the hero frame and Reel currently show the **inherited
  placeholder** `public/videos/poster.jpg` and `reel.mp4` (not couples footage
  yet). Drop your own `reel.mp4` + `poster.jpg` in `public/videos/`, or set
  `REEL_SRC` in `src/data/site.ts` to a YouTube/Vimeo link. On mobile the video
  is intentionally **not** fetched (poster/gradient only) to save cellular data.
- **Pricing & packages** — `src/data/packages.ts`. Three tiers (Mini / Signature
  / Cinematic); all prices, turnaround, and feature lists are **placeholders**.
  `highlighted` gives one tier the "Most booked" treatment.
- **The 4 session types** — `src/data/sessions.ts` (copy + points for the "What
  we film" section).
- **All copy, stats, testimonials, FAQ, contact details, socials** —
  `src/data/site.ts`. Testimonials and metrics are clearly-marked placeholders.
- **Contact form** — submits via a `mailto:` to `site.inquiryRecipients`. For
  real inbox delivery, wire `onSubmit` in `src/components/Contact.tsx` to
  Formspree / Resend / an API route.
- **"Book a call"** — `BOOKING_CALL_URL` in `src/components/Contact.tsx` points
  at a Calendly placeholder; swap for your scheduling link.

## Notes
- Mobile-first and fully responsive (390 / 768 / 1024 / 1440) with a mobile nav drawer.
- Accent text uses `amber-deep` (#9C4E28) on paper to meet WCAG contrast; bright
  `amber` is reserved for fills, dots, and glows.
- All motion respects `prefers-reduced-motion`; the custom cursor mounts only on
  fine-pointer (mouse) devices.
