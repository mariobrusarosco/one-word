const CORE_COLOR_TOKENS = {
  neutral: {
    0: "#FFFFFF",
    100: "#FDFCFC",
  },
  rose: {
    0: "#FFD9D9",
    100: "#FFD1CA",
    500: "#CF6689",
    800: "#B84066",
  },
  violet: {
    500: "#431E4C",
    800: "#260725",
  },
  teal: {
    500: "#6A9B96",
    700: "#254441",
  },
};

export const ONE_WORD_PALETTE = {
  ...CORE_COLOR_TOKENS,
  // background: {
  //   DEFAULT: "white",
  //   light: "red",
  //   dark: "blue",
  // },
  // primary: {
  // DEFAULT: "orange",
  // light: "#254441",
  //   background: "green",
  //   light: "red",
  //   dark: "tan",
  //   foreground: "#254441",
  // },
  // secondary: {
  //   DEFAULT: "#254441",
  //   light: "#FFD1CA",
  //   dark: "#BB2253",
  //   foreground: "#FF6F59",
  // },
  // tertiary: {
  //   DEFAULT: "#FF6F59",
  //   light: "#FF6F59",
  //   dark: "#FF6F59",
  // },
  // neutral: {
  //   DEFAULT: "#000000",
  //   light: "#FFD1CA",
  //   dark: "#000000",
  // },
  // surface: {
  //   DEFAULT: "#254441",
  //   light: "#FFD1CA",
  //   dark: "#254441",
  // },
  // error: {
  //   DEFAULT: "#BB2253",
  //   light: "#BB2253",
  //   dark: "#BB2253",
  // },
  // card: {
  //   DEFAULT: "gold",
  //   foreground: "orange",
  // },
  border: "hsl(var(--border))",
  // input: "hsl(var(--input))",
  // ring: "hsl(var(--ring))",
  // foreground: { DEFAULT: "darkblue" },
  // destructive: {
  //   DEFAULT: CORE_COLOR_TOKENS.red[400],
  //   foreground: "pink",
  // },
  // muted: {
  //   DEFAULT: "gold",
  //   foreground: "pink",
  // },
  // accent: {
  //   DEFAULT: "tan",
  //   foreground: "tomato",
  // },
  // popover: {
  //   DEFAULT: "green",
  //   foreground: "orange",
  // },
};
