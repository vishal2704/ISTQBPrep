/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Baloo 2", "Nunito", "system-ui", "sans-serif"],
        display: ["Baloo 2", "system-ui", "sans-serif"],
      },
      colors: {
        // Playful accent palette (kept — used throughout existing components)
        feather: "#58CC02",
        featherDark: "#4CAD02",
        featherPress: "#3D9100",
        sky: "#1CB0F6",
        skyDark: "#0F8FCB",
        macaw: "#1CB0F6",
        fox: "#FF9600",
        foxDark: "#E08600",
        cardinal: "#FF4B4B",
        cardinalDark: "#E63E3E",
        bee: "#FFC800",
        beeDark: "#E5B400",
        plum: "#8B5CF6",
        plumDark: "#7C3AED",
        mint: "#0EA5A0",
        mintDark: "#0B8A85",
        wolf: "#4B4B4B",
        eel: "#777777",
        hare: "#AFAFAF",
        swan: "#E5E5E5",
        polar: "#FFFFFF",
        beetle: "#3C3C3C",

        // New: brand identity gradient (indigo -> violet -> sky), used for
        // hero sections, nav, primary CTAs, gradient text.
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        ink900: "#0B1220",

        surface: "var(--surface)",
        surfaceAlt: "var(--surface-alt)",
        ink: "var(--ink)",
        inkSoft: "var(--ink-soft)",
        border: "var(--border)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        pop: "0 4px 0 0 var(--btn-shadow)",
        popSm: "0 3px 0 0 var(--btn-shadow)",
        card: "0 2px 0 0 rgba(0,0,0,0.06), 0 8px 20px -8px rgba(0,0,0,0.15)",
        glow: "0 0 0 1px rgba(99,102,241,0.15), 0 20px 60px -20px rgba(79,70,229,0.45)",
        glowSm: "0 8px 24px -10px rgba(79,70,229,0.5)",
        elevated: "0 1px 2px rgba(15,23,42,0.06), 0 12px 32px -12px rgba(15,23,42,0.18)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4F46E5 0%, #6366F1 45%, #0EA5E9 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(14,165,233,0.10) 100%)",
        "hero-dark": "radial-gradient(1200px 600px at 15% -10%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(900px 500px at 100% 10%, rgba(14,165,233,0.25), transparent 55%), linear-gradient(180deg, #0B1220 0%, #0F172A 100%)",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "60%": { transform: "scale(1.04)", opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.96)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        pop: "pop .25s ease-out",
        wiggle: "wiggle .4s ease-in-out",
        floaty: "floaty 3s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        fadeUp: "fadeUp .5s ease-out both",
        "spin-slow": "spinSlow 14s linear infinite",
        "spin-reverse-slow": "spinSlow 22s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
