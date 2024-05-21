import { useReactContextAdapter } from "./adapters/react-context";
import { ThemeAdapter } from "./typing";

export const useAppTheme = (): ThemeAdapter => {
  const { setTheme, theme, AppThemeProvider } = useReactContextAdapter();

  return { setTheme, theme, AppThemeProvider };
};
