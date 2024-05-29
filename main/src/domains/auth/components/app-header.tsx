import { Button } from "@/domains/ui-system/components/ui/button";
import { NavLink } from "react-router-dom";
import { ThemeModeToggle } from "./authenticated-menu/theme-mode-toggle";
import { SocketStatus } from "@/domains/socket/components/socket-status";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";

const AppHeader = () => {
  const { state } = useWebSocket();

  return (
    <header className="z-20 sticky top-0 shadow-main-bottom flex  items-center row-start-1 row-end-2 bg-pink-500 dark:bg-teal-800 p-6 gap-x-2 tablet:py-6 tablet:px-8 desktop:row-start-1 desktop:row-end-1 desktop:col-start-2 desktop:col-end-2  desktop:px-12 ">
      <NavLink to="/">
        <Icon name="home" className="w-7 h-7 stroke-white-100" />
      </NavLink>

      <div className="flex gap-x-6 items-center ml-auto">
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
