import { Button } from "@/domains/ui-system/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/domains/ui-system/components/ui/popover";
import { useAppTheme } from "@/domains/ui-system/theming/theme";

const ComponentsScreen = () => {
  const { setTheme } = useAppTheme();

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button>toggle theme</Button>
        </PopoverTrigger>

        <div onClick={() => setTheme("light")}>Light</div>
        <div onClick={() => setTheme("dark")}>Dark</div>
        <div onClick={() => setTheme("system")}>System</div>
        <PopoverContent></PopoverContent>
      </Popover>

      <p>PRIMARY</p>
      <p>
        <Button variant="primary" size="small">
          MB
        </Button>
      </p>
      <p>
        <Button variant="primary" size="medium">
          MB
        </Button>
      </p>
      <p>
        <Button variant="primary" size="large">
          MB
        </Button>
      </p>

      <p>SECONDARY</p>
      <p>
        <Button variant="secondary" size="small">
          MB
        </Button>
      </p>
      <p>
        <Button variant="secondary" size="medium">
          MB
        </Button>
      </p>
      <p>
        <Button variant="secondary" size="large">
          MB
        </Button>
      </p>

      <p>OUTLINE</p>
      <div className="bg-pink-800 p-4 flex flex-col gap-3">
        <p>
          <Button variant="outline" size="small">
            MB
          </Button>
        </p>
        <p>
          <Button variant="outline" size="medium">
            MB
          </Button>
        </p>
        <p>
          <Button variant="outline" size="large">
            MB
          </Button>
        </p>
      </div>

      <p>DANGER</p>
      <p>
        <Button variant="danger" size="small">
          MB
        </Button>
      </p>
      <p>
        <Button variant="danger" size="medium">
          MB
        </Button>
      </p>
      <p>
        <Button variant="danger" size="large">
          MB
        </Button>
      </p>

      <p>
        <Button roundness="full" variant="primary" size="small">
          MB
        </Button>
      </p>
      <p>
        <Button roundness="full" variant="secondary" size="small">
          MB
        </Button>
      </p>
      <p className="bg-black">
        <Button roundness="full" variant="outline" size="small">
          MB
        </Button>
      </p>
      <p>
        <Button roundness="full" variant="danger" size="small">
          MB
        </Button>
      </p>

      <p>
        <Button roundness="full" variant="primary" size="medium">
          MB
        </Button>
      </p>
      <p>
        <Button roundness="full" variant="secondary" size="medium">
          MB
        </Button>
      </p>
      <p className="bg-black">
        <Button roundness="full" variant="outline" size="medium">
          MB
        </Button>
      </p>
      <p>
        <Button roundness="full" variant="danger" size="medium">
          MB
        </Button>
      </p>

      <p>
        <Button roundness="full" variant="primary" size="large">
          MB
        </Button>
      </p>
      <p>
        <Button roundness="full" variant="secondary" size="large">
          MB
        </Button>
      </p>
      <p className="bg-black">
        <Button roundness="full" variant="outline" size="large">
          OU
        </Button>
      </p>
      <p>
        <Button roundness="full" variant="danger" size="large">
          MB
        </Button>
      </p>
    </div>
  );
};

export { ComponentsScreen };
