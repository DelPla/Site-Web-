/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Premium dark + gold — from ui-ux-pro-max design system
        ink: {
          950: "#0C0A09",
          900: "#1C1917",
          800: "#292524",
          700: "#44403C",
        },
        gold: {
          DEFAULT: "#CA8A04",
          400: "#E0A82E",
          500: "#CA8A04",
          600: "#A16207",
        },
        sand: "#FAFAF9",
        mute: "#A8A29E",
        line: "rgba(214,211,209,0.12)",
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
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
