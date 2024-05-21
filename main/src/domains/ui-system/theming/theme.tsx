import { useThemeStore } from "./state-managers/zustand";
import { ThemeProps } from "./typing";

export const useAppTheme = (): ThemeProps => {
  const { setTheme, theme } = useThemeStore();

  return { setTheme, theme, AppThemeProvider: undefined };
};
