import { create } from "zustand";
import {
  updateModeOnLocalStorage,
  updateModeOnDOM,
  initializeTheme,
} from "../utils";
import { APP_THEME_STORAGE_KEY, ThemeMode, ThemeAdapter } from "../typing";

export const useZustandManager = create<ThemeAdapter>((set) => ({
  theme: initializeTheme() as ThemeMode,
  setTheme: (theme: ThemeMode) => {
    updateModeOnDOM(theme);
    updateModeOnLocalStorage(APP_THEME_STORAGE_KEY, theme);

    set({ theme });
  },
}));
