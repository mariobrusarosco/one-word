export const updateModeOnDOM = (theme: ThemeMode) => {
  const root = window.document.documentElement;

  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(theme);
};

export const updateModeOnLocalStorage = (
  storageKey: string,
  theme: ThemeMode
) => localStorage.setItem(storageKey, theme);

export type ThemeMode = "dark" | "light" | "system";

export type ThemeProps = {
  Provider?: ({
    children,
  }: {
    children: React.ReactNode;
    defaultTheme: ThemeMode;
  }) => JSX.Element;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

export const APP_THEME_STORAGE_KEY = "ONE_WORD_THEME_MODE";
