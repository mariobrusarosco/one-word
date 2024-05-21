import { APP_DEFAULT_MODE, APP_THEME_STORAGE_KEY, ThemeMode } from "./typing";

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

export const initializeTheme = () => {
  const modeFromLocalStorage = localStorage.getItem(
    APP_THEME_STORAGE_KEY
  ) as ThemeMode;
  updateModeOnDOM(modeFromLocalStorage);
  updateModeOnLocalStorage(
    APP_THEME_STORAGE_KEY,
    modeFromLocalStorage || APP_DEFAULT_MODE
  );

  return modeFromLocalStorage;
};
