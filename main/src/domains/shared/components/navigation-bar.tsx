import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/domains/ui-system/components/ui/popover";
import { useTheme } from "@/domains/ui-system/theming/theme-provider";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="hidden bg-white dark:bg-secondary tablet:block">
      <ul>
        <li className="font-serif">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/tables">Tables</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        <li>
          <Popover>
            <PopoverTrigger>toggle theme</PopoverTrigger>

            <PopoverContent>
              <div onClick={() => setTheme("light")}>Light</div>
              <div onClick={() => setTheme("dark")}>Dark</div>
              <div onClick={() => setTheme("system")}>System</div>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </nav>
  );
};
