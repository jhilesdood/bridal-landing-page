import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm paper canvas (Hiles Media brand — light editorial-cinematic)
        paper: {
          DEFAULT: "#F5F0E7",
          2: "#FBF8F2",
          soft: "#CFC7B8", // secondary text on the dark cinematic bands
        },
        sand: "#EAE1D3", // slightly deeper warm band for section rhythm
        ink: {
          DEFAULT: "#16130F",
          soft: "#4A443C",
        },
        muted: "#7A736A",
        amber: {
          DEFAULT: "#CB8A4E", // fills / dots / glows only (fails text contrast on paper)
          deep: "#9C4E28", // accent TEXT on light (AA on paper)
          glow: "#E4A85C", // accent on dark bands
        },
        // Cinematic dark bands (Reel + Contact)
        night: {
          DEFAULT: "#141210",
          2: "#1C1813",
          3: "#241F19",
        },
        line: "rgba(22,19,15,0.10)",
        "line-strong": "rgba(22,19,15,0.18)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
      },
      maxWidth: {
        frame: "1500px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        // warm, soft — reads on paper, not a harsh dark-mode glow
        glow: "0 24px 60px -24px rgba(156,78,40,0.35)",
        "glow-soft": "0 40px 120px -40px rgba(156,78,40,0.28)",
        card: "0 20px 50px -30px rgba(22,19,15,0.35)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-2%,0) scale(1.03)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        drift: "drift 18s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
