import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { useAppTheme } from "./theming/theme";

const UISystemScreen = () => {
  const { setTheme, theme } = useAppTheme();
  console.log("UI ", { theme });
  return (
    <div>
      <h1>UI System</h1>

      {/* <section>
        <h2>Button</h2>

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
      </section> */}

      <section>
        <h2>Popover</h2>
        <Popover>
          <PopoverTrigger>
            <Button>toggle theme</Button>
          </PopoverTrigger>

          <PopoverContent>
            <div onClick={() => setTheme("light")}>Light</div>
            <div onClick={() => setTheme("dark")}>Dark</div>
            <div onClick={() => setTheme("system")}>System</div>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  );
};

export default UISystemScreen;
