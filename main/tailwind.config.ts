import type { Config } from "tailwindcss";
import { APP_CONTAINER } from "./src/styling/constants/app-container";
import { APP_FONTS } from "./src/styling/constants/fonts";
import { APP_BREAKPOINTS } from "./src/styling/constants/breakpoints-and-media-queries";
import { ONE_WORD_PALETTE } from "./src/styling/constants/palette";
import tailwindcssAnimatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: APP_BREAKPOINTS,
    container: APP_CONTAINER,
    extend: {
      boxShadow: {
        "main-bottom": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "main-right": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: APP_FONTS.fontFamily,
      colors: {
        ...ONE_WORD_PALETTE,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [tailwindcssAnimatePlugin],
} satisfies Config;

export default config;
