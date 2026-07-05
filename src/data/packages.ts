import type { LucideIcon } from "lucide-react";
import { Heart, Sparkles, Film } from "lucide-react";

/* ------------------------------------------------------------------ *
 * PRICING — all placeholder. Swap the `price`, `turnaround`, and any
 * `features` for your real offer. `highlighted: true` gives a tier the
 * "Most booked" treatment (there should only be one).
 *
 * These tiers work for ANY session type — proposal, engagement, gender
 * reveal, or anniversary. Couples pick a tier; the "What we film" section
 * shows the moments each one covers.
 * ------------------------------------------------------------------ */

export interface Package {
  id: string;
  name: string;
  blurb: string;
  price: string;
  priceNote: string;
  turnaround: string;
  icon: LucideIcon;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const packages: Package[] = [
  {
    id: "mini",
    name: "The Mini",
    blurb: "A short, sweet film — perfect for a proposal or a reveal.",
    price: "$450",
    priceNote: "up to 1 hour",
    turnaround: "Film in ~1 week",
    icon: Heart,
    features: [
      "Up to 1 hour of coverage",
      "One cinematographer",
      "60–90 second cinematic film",
      "48-hour vertical sneak peek",
      "Licensed music + color grade",
      "Private online gallery",
    ],
    cta: "Book The Mini",
  },
  {
    id: "signature",
    name: "The Signature",
    blurb: "Our most-booked session — the full love story, beautifully told.",
    price: "$900",
    priceNote: "up to 2.5 hours",
    turnaround: "Sneak peek in 48 hrs · film in ~2 weeks",
    icon: Sparkles,
    features: [
      "Up to 2.5 hours of coverage",
      "Two locations / two looks",
      "2–3 minute cinematic film",
      "2 vertical social cutdowns",
      "48-hour vertical sneak peek",
      "Licensed music + cinematic grade",
      "Priority editing queue",
    ],
    highlighted: true,
    cta: "Book The Signature",
  },
  {
    id: "cinematic",
    name: "The Cinematic",
    blurb: "The full production — multi-location, extended, unforgettable.",
    price: "$2,000",
    priceNote: "half-day, custom scope",
    turnaround: "Next-day peek · priority delivery",
    icon: Film,
    features: [
      "Half-day coverage, multiple locations",
      "Second shooter for extra angles",
      "3–5 minute signature film + teaser",
      "Reveal / first-look reaction coverage",
      "Drone & golden-hour add-ons available",
      "Extended social cutdowns for both of you",
      "Same- or next-day sneak peek",
    ],
    cta: "Request a Quote",
  },
];
