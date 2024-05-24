export const APP_THEME_STORAGE_KEY = "ONE_WORD_THEME_MODE";
export const APP_DEFAULT_MODE = "system";
export type ThemeMode = "dark" | "light" | "system";

export type ThemeAdapter = {
  AppThemeProvider?: ({
    children,
    defaultTheme,
  }: {
    children: React.ReactNode;
    defaultTheme: ThemeMode;
  }) => JSX.Element;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};
