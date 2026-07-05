import type { LucideIcon } from "lucide-react";
import { Clapperboard, EyeOff, Timer, Gem } from "lucide-react";

/* ------------------------------------------------------------------ *
 * EDIT ME. This file holds all copy, contact details, and content for
 * the couples-sessions page. Swap the placeholder values for real ones.
 * ------------------------------------------------------------------ */

export const site = {
  name: "Hiles Media",
  // Public-facing address shown in the book section + "email us" links.
  email: "joey@Hilesmedia.com",
  // Every inquiry-form submission is delivered to all of these (comma-joined
  // into the mailto). Note: couples can see these addresses in their email app.
  inquiryRecipients: ["joey@Hilesmedia.com", "hiles.joey@gmail.com"],
  phone: "832-262-2166",
  location: "Houston, TX",
  serving: "Houston & traveling for the moment that matters",
  availability: "Booking 2026 sessions",
  established: "Est. 2024",
};

/** The one reel. Drop a file at /public/videos/reel.mp4, or paste a
 *  YouTube/Vimeo link here — the player detects the type automatically. */
export const REEL_SRC = "/videos/reel.mp4";
/** Still frame — the video poster on desktop and the reel image on mobile. */
export const REEL_POSTER = "/videos/poster.jpg";
/** Ambient hero film (horizontal / 16:9). Autoplays muted on desktop. */
export const HERO_SRC = "/videos/hero.mp4";

export const navLinks = [
  { label: "Sessions", href: "#sessions" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Reel", href: "#reel" },
  { label: "FAQ", href: "#faq" },
];

/** Scrolling ticker of moments we film. */
export const momentTypes = [
  "Proposals",
  "Engagements",
  "Gender Reveals",
  "Anniversaries",
  "She Said Yes",
  "Date-Night Films",
  "Vow Renewals",
  "Elopements",
  "Baby Reveals",
  "Love Stories",
];

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const valueProps: ValueProp[] = [
  {
    icon: Clapperboard,
    title: "Shot like a film",
    body: "Cinema lenses, natural light, and a colorist's grade. Not a phone clip — a short film of the two of you that feels like the movies.",
  },
  {
    icon: EyeOff,
    title: "Proposals, kept secret",
    body: "For the big question we stay hidden — long lenses, a scouted spot, and a plan. She never sees us coming; you get every second of the yes.",
  },
  {
    icon: Timer,
    title: "A sneak peek in 48 hours",
    body: "A short vertical teaser lands within 48 hours so you can share the news while it still feels brand-new — the full film follows soon after.",
  },
  {
    icon: Gem,
    title: "An heirloom to keep",
    body: "Delivered in a private gallery, graded and set to licensed music — a film you'll rewatch on every anniversary for the rest of your lives.",
  },
];

export interface DeliveryStep {
  when: string;
  title: string;
  body: string;
}

export const delivery: DeliveryStep[] = [
  {
    when: "The day",
    title: "We film it",
    body: "Golden-hour light, a relaxed pace, and gentle direction so you two just get to be together while we capture it.",
  },
  {
    when: "+48 hours",
    title: "Sneak peek",
    body: "A short vertical teaser lands in your inbox — perfect for the announcement post while everyone's still buzzing.",
  },
  {
    when: "Week 1–2",
    title: "Your film",
    body: "Your full cinematic film arrives with a simple, frame-accurate review link to share with family.",
  },
  {
    when: "Forever",
    title: "The keepsake",
    body: "Graded, mastered, and delivered in every ratio — a private gallery you'll come back to for years.",
  },
];

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}

export const process: ProcessStep[] = [
  {
    n: "01",
    title: "Tell us the story",
    body: "Share the occasion, the date, and what you're picturing. We reply within one business day with availability and a quote.",
  },
  {
    n: "02",
    title: "Plan the moment",
    body: "A quick call to lock the location, timing, and — for proposals — the secret plan so nothing is left to chance.",
  },
  {
    n: "03",
    title: "Just be together",
    body: "On the day we keep it easy and unposed. You focus on each other; we quietly capture every real look and laugh.",
  },
  {
    n: "04",
    title: "Relive it",
    body: "Sneak peek in 48 hours, your full film in one to two weeks — color-graded, scored, and ready to share.",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// Placeholder metrics — swap for your real numbers.
export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Couples filmed" },
  { value: 48, suffix: "hr", label: "Sneak-peek turnaround" },
  { value: 100, suffix: "%", label: "Proposals kept secret" },
  { value: 5, suffix: "★", label: "Average rating" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// Placeholder testimonials — replace with real couple quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "He pulled it off and we never saw them — then two days later we had a film of the whole proposal to send our families. We've watched it a hundred times.",
    name: "Maya & Chris",
    role: "Proposal · Buffalo Bayou",
  },
  {
    quote:
      "Our engagement film feels like a scene from a movie. Joey made us feel completely at ease and the golden-hour light was unreal.",
    name: "Alexis & Jordan",
    role: "Engagement · The Heights",
  },
  {
    quote:
      "The gender-reveal video had our whole family crying. Fast turnaround, and every frame is gorgeous.",
    name: "The Okafors",
    role: "Gender reveal · Sugar Land",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How do you film a surprise proposal without giving it away?",
    a: "This is our favorite thing to do. We scout the location with you beforehand, position discreetly with long lenses, and blend in as if we're just other people in the park. Your partner won't know we're there until you tell them — and we keep filming right through the celebration and any first-look reactions.",
  },
  {
    q: "How fast do we get our video?",
    a: "A short vertical sneak peek lands within 48 hours — ideal for the announcement post. Your full cinematic film is delivered in one to two weeks depending on the package. Rush next-day edits are available on request.",
  },
  {
    q: "Where should we shoot, and when?",
    a: "We'll help you choose. Houston has beautiful spots — Buffalo Bayou, the Arboretum, the Heights, rooftop skylines — and we plan around golden hour (the hour after sunrise or before sunset) for the most cinematic light. We travel outside Houston too.",
  },
  {
    q: "What should we wear?",
    a: "Coordinated, not matching — think complementary tones and one slightly dressier look. Once you book, we'll send a short styling guide with palettes and ideas tailored to your location and the season.",
  },
  {
    q: "Do you cover baby and gender reveals?",
    a: "Yes. We capture the build-up, the reaction, and the people around you — multi-angle where it counts — then cut it into an emotional short you'll want to send to everyone. Great paired with an engagement or maternity session.",
  },
  {
    q: "How do we reserve our date?",
    a: "A signed agreement plus a 50% deposit locks your date; the balance is due before delivery. Popular weekends and holiday windows (Valentine's, the December holidays) fill early, so reach out as soon as you have a date in mind.",
  },
];

export interface Social {
  label: string;
  href: string;
}

export const socials: Social[] = [
  { label: "Instagram", href: "https://instagram.com/hilesmedia" },
  { label: "YouTube", href: "https://www.youtube.com/@Hilesmedia" },
];
