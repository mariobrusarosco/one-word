import { useTheme } from "./state-managers/react-context";
import { useThemeStore } from "./state-managers/zustand";
import { ThemeProps } from "./utils";

export const useAppTheme = (): ThemeProps => {
  const { theme, setTheme } = useThemeStore();
  // const { Provider, setTheme, theme } = useTheme();

  return { setTheme, theme, Provider: undefined };
};
