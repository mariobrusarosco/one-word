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
  border: "hsl(var(--border))",
};
