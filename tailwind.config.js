/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream + navy + gold — "private bank meets maison de luxe"
        // NOTE: `ink` names kept for compatibility; values are now light creams.
        ink: {
          950: "#F5EFE4", // main background (warm cream)
          900: "#EEE6D6", // alternate / card surface
          800: "#E4DAC6", // slightly deeper panel
          700: "#D3C6AC", // muted panel
        },
        navy: {
          DEFAULT: "#1B2C46",
          900: "#122036",
          700: "#2C3E5C",
        },
        gold: {
          DEFAULT: "#AD8636",
          400: "#C8A24E",
          500: "#AD8636",
          600: "#8A6A26",
        },
        sand: "#1B2C46", // primary text = deep navy
        mute: "#77705F", // secondary text = warm grey
        line: "rgba(27,44,70,0.14)",
      },
      fontFamily: {
        display: ['"Bodoni Moda"', "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        orbit: { to: { transform: "rotate(360deg)" } },
        orbitRev: { to: { transform: "rotate(-360deg)" } },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 14s ease-in-out infinite",
        orbit: "orbit 80s linear infinite",
        orbitRev: "orbitRev 80s linear infinite",
      },
    },
  },
  plugins: [],
};
