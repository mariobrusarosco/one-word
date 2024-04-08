import type { Config } from "tailwindcss";
import { APP_CONTAINER } from "./src/styling/constants/app-container";

const ONE_WORD_TAILWIND_CONFIG: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: APP_CONTAINER,
  },
};

export default ONE_WORD_TAILWIND_CONFIG;
