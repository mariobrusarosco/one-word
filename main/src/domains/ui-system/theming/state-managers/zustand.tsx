import { create } from "zustand";
import {
  ThemeMode,
  updateModeOnLocalStorage,
  updateModeOnDOM,
  ThemeProps,
  APP_THEME_STORAGE_KEY,
} from "../utils";

const DEFAULT_MODE = "system";
const modeFromLocalStorage = localStorage.getItem(
  APP_THEME_STORAGE_KEY
) as ThemeMode;

const initializeTheme = () => {
  updateModeOnDOM(modeFromLocalStorage);
  updateModeOnLocalStorage(APP_THEME_STORAGE_KEY, modeFromLocalStorage);

  return modeFromLocalStorage || DEFAULT_MODE;
};

export const useThemeStore = create<ThemeProps>((set) => ({
  theme: initializeTheme() as ThemeMode,
  setTheme: (theme: ThemeMode) => {
    updateModeOnDOM(theme);
    updateModeOnLocalStorage(APP_THEME_STORAGE_KEY, theme);

    set({ theme });
  },
}));
