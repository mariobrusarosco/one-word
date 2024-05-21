import { useTheme } from "./state-managers/react-context";
import { ThemeProps } from "./typing";

export const useAppTheme = (): ThemeProps => {
  const { AppThemeProvider, setTheme, theme } = useTheme();

  return { setTheme, theme, AppThemeProvider };
};
