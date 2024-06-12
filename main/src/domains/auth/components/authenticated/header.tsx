import { Button } from "@/domains/ui-system/components/ui/button";
import { NavLink } from "react-router-dom";
import { SocketStatus } from "@/domains/socket/components/socket-status";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { useQuery } from "@tanstack/react-query";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { userLoader } from "../../api/loaders";
import { ThemeModeToggle } from "../theme-mode-toggle";

const PublicHeader = () => {
  const { connected } = useWebSocket();
  const { data } = useQuery({
    queryKey: ["auth"],
    queryFn: userLoader,
    enabled: false,
  });
  const userInitials = getInitials(`${data?.firstName} ${data?.lastName}`);

  return (
    <header className="z-20 sticky top-0 shadow-main-bottom flex items-center col-span-3 bg-rose-800 dark:bg-violet-800 p-6 gap-x-2 tablet:py-6 tablet:px-8 desktop:px-12">
      <NavLink to="/">
        <Icon name="home" className="w-7 h-7 stroke-neutral-100" />
      </NavLink>

      <div className="flex gap-x-6 items-center ml-auto">
        <SocketStatus connected={connected} />

        <ThemeModeToggle />

        {userInitials ? (
          <NavLink to="/account">
            <Button variant="outline" roundness="full" className="font-sans">
              {userInitials}
            </Button>
          </NavLink>
        ) : null}
      </div>
    </header>
  );
};

export { PublicHeader };
