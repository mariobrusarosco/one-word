import { createContext, useContext, useEffect, useState } from "react";
import {
  APP_THEME_STORAGE_KEY,
  ThemeMode,
  ThemeProps,
  updateModeOnDOM,
} from "../utils";

const ThemeProviderContext = createContext<ThemeProps>({});

const ReactContextThemeProvider = ({
  children,
  defaultTheme = "light",
  ...props
}: any) => {
  const [theme, setTheme] = useState<ThemeMode>(
    () =>
      (localStorage.getItem(APP_THEME_STORAGE_KEY) as ThemeMode) || defaultTheme
  );

  useEffect(() => {
    updateModeOnDOM(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeMode) => {
      localStorage.setItem(APP_THEME_STORAGE_KEY, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return {
    theme: context.theme,
    setTheme: context.setTheme,
    Provider: ReactContextThemeProvider,
  };
};
