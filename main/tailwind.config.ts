import type { Config } from "tailwindcss";
import { APP_CONTAINER } from "./src/styling/constants/app-container";
import { APP_BREAKPOINTS } from "./src/styling/constants/breakpoints-and-media-queries";

const ONE_WORD_TAILWIND_CONFIG: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: APP_BREAKPOINTS,
    container: APP_CONTAINER,
  },
};

export default ONE_WORD_TAILWIND_CONFIG;
