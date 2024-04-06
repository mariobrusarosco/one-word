import type { Config } from "tailwindcss";

const ONE_WORD_TAILWIND_CONFIG: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      "m-only": { max: "767px" },
      tablet: { min: "768px" },
      desktop: { min: "1280px" },
    },
  },
};

export default ONE_WORD_TAILWIND_CONFIG;
