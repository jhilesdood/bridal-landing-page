import type { LucideIcon } from "lucide-react";
import { Diamond, Heart, Baby, CalendarHeart } from "lucide-react";

/* ------------------------------------------------------------------ *
 * The four kinds of couples sessions we film. Powers the "What we film"
 * sticky scroll-through section. `tag` is the short overline; `kicker`
 * shows in the sticky panel.
 * ------------------------------------------------------------------ */

export interface SessionType {
  id: string;
  tag: string;
  title: string;
  kicker: string;
  body: string;
  points: string[];
  icon: LucideIcon;
  /** Backdrop still for the sticky panel + mobile card. */
  image: string;
}

export const sessionTypes: SessionType[] = [
  {
    id: "proposal",
    tag: "The big question",
    title: "Proposals",
    kicker: "She never sees us coming.",
    body: "The one you can't redo. We scout the spot, hide in plain sight with long lenses, and capture the whole thing — the nerves, the question, the yes, and the phone calls right after.",
    points: [
      "Discreet, hidden coverage",
      "Location scouting & timing plan",
      "First-look reaction filming",
      "48-hour announcement teaser",
    ],
    icon: Diamond,
    image: "/images/sessions/proposal.jpg",
  },
  {
    id: "engagement",
    tag: "Newly engaged",
    title: "Engagements",
    kicker: "Your love story, on screen.",
    body: "A relaxed golden-hour session that plays like a short film. Gentle direction, real moments, and a look that feels like the two of you — made to announce the engagement and set the tone for the wedding.",
    points: [
      "Golden-hour cinematic session",
      "Two looks / two locations",
      "Save-the-date ready cutdowns",
      "Styling guide included",
    ],
    icon: Heart,
    image: "/images/sessions/engagement.jpg",
  },
  {
    id: "reveal",
    tag: "Growing family",
    title: "Baby & Gender Reveals",
    kicker: "The moment everyone cries.",
    body: "The build-up, the reaction, and everyone who loves you — captured from the angles that matter and cut into an emotional short you'll want to send to the whole family the same day.",
    points: [
      "Multi-angle reaction coverage",
      "Family & guests included",
      "Pairs with a maternity session",
      "Fast, shareable delivery",
    ],
    icon: Baby,
    image: "/images/sessions/reveal.jpg",
  },
  {
    id: "anniversary",
    tag: "Still choosing each other",
    title: "Anniversary Films",
    kicker: "Years in, still a love story.",
    body: "A milestone deserves more than a dinner reservation. We film an intimate session — a decade, a vow renewal, a 'just because' — into a keepsake that honors how far you've come together.",
    points: [
      "Intimate milestone session",
      "Vow renewals welcome",
      "Interview / voiceover option",
      "Heirloom-quality keepsake",
    ],
    icon: CalendarHeart,
    image: "/images/sessions/anniversary.jpg",
  },
];
