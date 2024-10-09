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

      <div>
        <h2>Button</h2>

        <div className="flex gap-4">
          <div>
            <h2>PRIMARY</h2>
            <ul className="flex gap-4">
              <li>
                <Button roundness="none" variant="primary" size="extra-small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="none" variant="primary" size="small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="none" variant="primary" size="medium">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="none" variant="primary" size="large">
                  MB
                </Button>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <Button roundness="tiny" variant="primary" size="extra-small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="tiny" variant="primary" size="small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="tiny" variant="primary" size="medium">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="tiny" variant="primary" size="large">
                  MB
                </Button>
              </li>

              <li>
                <Button roundness="tiny" variant="primary" size="large">
                  MB
                </Button>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <Button roundness="small" variant="primary" size="extra-small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="small" variant="primary" size="small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="small" variant="primary" size="medium">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="small" variant="primary" size="large">
                  MB
                </Button>
              </li>

              <li>
                <Button roundness="small" variant="primary" size="large">
                  MB
                </Button>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <Button roundness="medium" variant="primary" size="extra-small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="medium" variant="primary" size="small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="medium" variant="primary" size="medium">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="medium" variant="primary" size="large">
                  MB
                </Button>
              </li>

              <li>
                <Button roundness="medium" variant="primary" size="large">
                  MB
                </Button>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <Button roundness="large" variant="primary" size="extra-small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="large" variant="primary" size="small">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="large" variant="primary" size="medium">
                  MB
                </Button>
              </li>
              <li>
                <Button roundness="large" variant="primary" size="large">
                  MB
                </Button>
              </li>

              <li>
                <Button roundness="large" variant="primary" size="large">
                  MB
                </Button>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <Button variant="primary" size="extra-small">
                  MB
                </Button>
              </li>
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
            </ul>
          </div>

          <div>
            <h3>SECONDARY</h3>
            <section className="flex gap-4">
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
            </section>
          </div>

          <div>
            <h3>OUTLINE</h3>
            <ul className="flex gap-4 bg-rose-800">
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
            </ul>
          </div>

          <div>
            <h3>DANGER</h3>
            <ul className="flex gap-4">
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
            </ul>
          </div>
        </div>
      </div>

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
