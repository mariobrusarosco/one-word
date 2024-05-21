import { create } from "zustand";
import {
  updateModeOnLocalStorage,
  updateModeOnDOM,
  initializeTheme,
} from "../utils";
import { APP_THEME_STORAGE_KEY, ThemeMode, ThemeProps } from "../typing";

export const useThemeStore = create<ThemeProps>((set) => ({
  theme: initializeTheme() as ThemeMode,
  setTheme: (theme: ThemeMode) => {
    updateModeOnDOM(theme);
    updateModeOnLocalStorage(APP_THEME_STORAGE_KEY, theme);

    set({ theme });
  },
}));
