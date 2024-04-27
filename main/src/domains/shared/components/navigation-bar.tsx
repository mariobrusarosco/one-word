import { Button } from "@/domains/ui-system/components/ui/button";
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
    <nav className="hidden bg-white dark:bg-black/50 tablet:block">
      <ul className="flex flex-col gap-3">
        {/* <li className="font-serif">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/tables">Tables</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li> */}

        <li>
          <Popover>
            <PopoverTrigger>
              <Button>toggle theme</Button>
            </PopoverTrigger>

            <div onClick={() => setTheme("light")}>Light</div>
            <div onClick={() => setTheme("dark")}>Dark</div>
            <div onClick={() => setTheme("system")}>System</div>
            <PopoverContent></PopoverContent>
          </Popover>
        </li>
        <p>PRIMARY</p>
        <li>
          <Button variant="primary" size="small">
            MB
          </Button>
        </li>
        <li>
          <Button variant="primary" size="medium">
            MB
          </Button>
        </li>
        <li>
          <Button variant="primary" size="large">
            MB
          </Button>
        </li>

        <p>SECONDARY</p>
        <li>
          <Button variant="secondary" size="small">
            MB
          </Button>
        </li>
        <li>
          <Button variant="secondary" size="medium">
            MB
          </Button>
        </li>
        <li>
          <Button variant="secondary" size="large">
            MB
          </Button>
        </li>

        <p>OUTLINE</p>
        <div className="bg-pink-800 p-4 flex flex-col gap-3">
          <li>
            <Button variant="outline" size="small">
              MB
            </Button>
          </li>
          <li>
            <Button variant="outline" size="medium">
              MB
            </Button>
          </li>
          <li>
            <Button variant="outline" size="large">
              MB
            </Button>
          </li>
        </div>

        <p>DANGER</p>
        <li>
          <Button variant="danger" size="small">
            MB
          </Button>
        </li>
        <li>
          <Button variant="danger" size="medium">
            MB
          </Button>
        </li>
        <li>
          <Button variant="danger" size="large">
            MB
          </Button>
        </li>

        <li>
          <Button roundness="full" variant="primary" size="small">
            MB
          </Button>
        </li>
        <li>
          <Button roundness="full" variant="secondary" size="small">
            MB
          </Button>
        </li>
        <li className="bg-black">
          <Button roundness="full" variant="outline" size="small">
            MB
          </Button>
        </li>
        <li>
          <Button roundness="full" variant="danger" size="small">
            MB
          </Button>
        </li>

        <li>
          <Button roundness="full" variant="primary" size="medium">
            MB
          </Button>
        </li>
        <li>
          <Button roundness="full" variant="secondary" size="medium">
            MB
          </Button>
        </li>
        <li className="bg-black">
          <Button roundness="full" variant="outline" size="medium">
            MB
          </Button>
        </li>
        <li>
          <Button roundness="full" variant="danger" size="medium">
            MB
          </Button>
        </li>

        <li>
          <Button roundness="full" variant="primary" size="large">
            MB
          </Button>
        </li>
        <li>
          <Button roundness="full" variant="secondary" size="large">
            MB
          </Button>
        </li>
        <li className="bg-black">
          <Button roundness="full" variant="outline" size="large">
            OU
          </Button>
        </li>
        <li>
          <Button roundness="full" variant="danger" size="large">
            MB
          </Button>
        </li>
      </ul>
    </nav>
  );
};
