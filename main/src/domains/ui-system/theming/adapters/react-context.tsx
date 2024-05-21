import { createContext, useContext, useEffect, useState } from "react";
import {
  initializeTheme,
  updateModeOnDOM,
  updateModeOnLocalStorage,
} from "../utils";
import { APP_THEME_STORAGE_KEY, ThemeMode, ThemeAdapter } from "../typing";

const ThemeProviderContext = createContext<ThemeAdapter>({} as ThemeAdapter);

const ReactContextThemeProvider = ({
  children,
  defaultTheme = "light",
}: {
  children: React.ReactNode;
  defaultTheme: ThemeMode;
}) => {
  const [theme, setTheme] = useState<ThemeMode>(
    () => initializeTheme() || defaultTheme
  );

  useEffect(() => {
    updateModeOnDOM(theme);
    updateModeOnLocalStorage(APP_THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeMode) => setTheme(theme),
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useReactContextAdapter = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useAppTheme must be used within a AppThemeProvider");

  return {
    theme: context.theme,
    setTheme: context.setTheme,
    AppThemeProvider: ReactContextThemeProvider,
  };
};
