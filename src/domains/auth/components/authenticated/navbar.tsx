import { CreateTable } from "@/domains/tables/components/modals/create-table";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { Link } from "react-router-dom";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketStatus } from "@/domains/socket/components/socket-status";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { ThemeModeToggle } from "../theme-mode-toggle";
import { TableList } from "@/domains/tables/components/table-list";

const Navbar = () => {
  const { connected } = useWebSocket();

  return (
    <div
      data-ui="navbar"
      className="flex items-center justify-between px-6 py-8 bg-neutral-100 dark:bg-violet-800 overflow-hidden shadow-main-bottom relative"
    >
      <div className="flex items-center">
        <CreateTable />

        <Separator
          className="mx-4 bg-rose-800 h-[57px]"
          orientation="vertical"
        />

        <TableList />
      </div>

      <ul className="flex items-center gap-3">
        <Separator
          className="mx-4 bg-rose-800 h-[57px]"
          orientation="vertical"
        />
        <li>
          <Button asChild variant="outline" roundness="full" size="small">
            <Link to="/tables">
              <Icon name="home" />
            </Link>
          </Button>
        </li>

        <li>
          <Button asChild variant="outline" roundness="full" size="small">
            <Link to="/account">
              <Icon name="user" />
            </Link>
          </Button>
        </li>
        <li>
          <ThemeModeToggle />
        </li>
        <li>
          <SocketStatus connected={connected} />
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
