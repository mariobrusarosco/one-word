import { createContext, useContext, useEffect, useState } from "react";
import { initializeTheme, updateModeOnDOM } from "../utils";
import { APP_THEME_STORAGE_KEY, ThemeMode, ThemeProps } from "../typing";

const ThemeProviderContext = createContext<ThemeProps>({});

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
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeMode) => {
      localStorage.setItem(APP_THEME_STORAGE_KEY, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
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
    AppThemeProvider: ReactContextThemeProvider,
  };
};
