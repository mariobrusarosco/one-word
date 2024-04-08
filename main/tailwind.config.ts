import type { Config } from "tailwindcss";
import { APP_CONTAINER } from "./src/styling/constants/app-container";
import { APP_FONTS } from "./src/styling/constants/fonts";
import { APP_BREAKPOINTS } from "./src/styling/constants/breakpoints-and-media-queries";
import { ONE_WORD_PALETTE } from "./src/styling/constants/palette";

const ONE_WORD_TAILWIND_CONFIG: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: APP_BREAKPOINTS,
    extend: {
      fontFamily: APP_FONTS.fontFamily,
    },
    container: APP_CONTAINER,
    colors: ONE_WORD_PALETTE,
  },
};

export default ONE_WORD_TAILWIND_CONFIG;
