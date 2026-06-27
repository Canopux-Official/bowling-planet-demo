/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "oklch(0.30 0.07 254)",
        "navy-deep": "oklch(0.22 0.06 254)",
        green: "oklch(0.74 0.17 138)",
        "green-deep": "oklch(0.62 0.16 138)",
        cyan: "oklch(0.89 0.05 210)",
        "cyan-soft": "oklch(0.96 0.02 210)",
        ink: "oklch(0.20 0.02 254)",
        paper: "oklch(0.985 0.005 240)",
        border: "oklch(0.91 0.015 230)",
        input: "oklch(0.91 0.015 230)",
        ring: "oklch(0.30 0.07 254)",
        background: "oklch(1 0 0)",
        foreground: "oklch(0.30 0.07 254)",
        primary: {
          DEFAULT: "oklch(0.30 0.07 254)",
          foreground: "oklch(0.985 0 0)",
        },
        secondary: {
          DEFAULT: "oklch(0.96 0.02 210)",
          foreground: "oklch(0.30 0.07 254)",
        },
        muted: {
          DEFAULT: "oklch(0.965 0.01 230)",
          foreground: "oklch(0.48 0.03 254)",
        },
        accent: {
          DEFAULT: "oklch(0.74 0.17 138)",
          foreground: "oklch(0.18 0.04 254)",
        },
        destructive: {
          DEFAULT: "oklch(0.55 0.22 27)",
          foreground: "oklch(0.985 0 0)",
        },
        card: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.30 0.07 254)",
        },
        popover: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.30 0.07 254)",
        },
        chart: {
          1: "oklch(0.646 0.222 41.116)",
          2: "oklch(0.6 0.118 184.704)",
          3: "oklch(0.398 0.07 227.392)",
          4: "oklch(0.828 0.189 84.429)",
          5: "oklch(0.769 0.188 70.08)",
        },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "calc(0.625rem - 2px)",
        sm: "calc(0.625rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
