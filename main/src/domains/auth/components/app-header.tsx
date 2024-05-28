import { Button } from "@/domains/ui-system/components/ui/button";
import { NavLink } from "react-router-dom";
import { ThemeModeToggle } from "./authenticated-menu/theme-mode-toggle";
import { SocketStatus } from "@/domains/socket/components/socket-status";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";

const AppHeader = () => {
  const { state } = useWebSocket();

  return (
    <header className="sticky top-0 flex justify-between bg-pink-500 p-6 tablet:py-6 tablet:px-8 desktop:row-start-1 desktop:row-end-1 desktop:col-start-2 desktop:col-end-2  desktop:px-12 dark:bg-teal-800">
      <NavLink to="/">
        <Button variant="secondary">home</Button>
      </NavLink>

      <div className="flex gap-x-8 items-center">
        <SocketStatus
          connected={state?.socketInstance && state?.socketInstance?.connected}
        />

        <ThemeModeToggle />

        <NavLink to="/account">
          <Button variant="outline" roundness="full" className="font-sans">
            MB
          </Button>
        </NavLink>
      </div>
    </header>
  );
};

export { AppHeader };
