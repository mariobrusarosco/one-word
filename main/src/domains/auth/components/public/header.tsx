import { ThemeModeToggle } from "../theme-mode-toggle";
import { CreateDemoUser } from "./modals/create-demo-user";

const PublicHeader = () => {
  return (
    <header className="z-20">
      <CreateDemoUser />

      <div className="flex gap-x-6 items-center ml-auto">
        <ThemeModeToggle />
      </div>
    </header>
  );
};

export { PublicHeader };
