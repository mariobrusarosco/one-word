import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { useAppTheme } from "@/domains/ui-system/theming/theme";

const ThemeModeToggle = () => {
  const { setTheme, theme } = useAppTheme();

  const toggleThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <span onClick={toggleThemeMode} className="">
      <Icon
        name="sun-moon"
        size="medium"
        className="stroke-white-100 cursor-pointer"
      />
    </span>
  );
};

export { ThemeModeToggle };
