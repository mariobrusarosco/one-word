import { useReactController } from "./adapters/react-context";
import { ThemeController } from "./typing";

export const useAppTheme = (): ThemeController => {
  const { setTheme, theme, AppThemeProvider } = useReactController();

  return {
    setTheme,
    theme,
    AppThemeProvider,
  };
};
