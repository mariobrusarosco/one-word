import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { useAppTheme } from "@/domains/ui-system/theming/theme";

const ThemeModeToggle = () => {
  const { setTheme, theme } = useAppTheme();

  const toggleThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={toggleThemeMode} variant="outline" roundness="full">
      <Icon name="sun-moon" size="medium" />
    </Button>
  );
};

export { ThemeModeToggle };
