import { tablesLoader } from "@/domains/tables/api/loader";
import { CreateTable } from "@/domains/tables/components/modals/create-table";
import { Table } from "@/domains/tables/typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { SocketStatus } from "@/domains/socket/components/socket-status";
import { ThemeModeToggle } from "./authenticated-menu/theme-mode-toggle";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";

const AppSidebar = () => {
  const { data: tables } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: tablesLoader,
    enabled: true,
  });
  const { connected } = useWebSocket();

  return (
    <div
      data-ui="app-sidebar"
      className="flex items-center justify-between px-4 py-6 bg-neutral-100 dark:bg-violet-800 overflow-hidden shadow-main-bottom z-[3]"
    >
      <div className="flex items-center">
        <CreateTable />

        <Separator
          className="mx-4 bg-rose-800 h-[57px]"
          orientation="vertical"
        />

        <ul className="flex items-center gap-x-4">
          {tables?.map((table) => (
            <li key={table?.name}>
              <Button roundness="full" size="small" asChild>
                <Link to={`/tables/${table?.id}`}>
                  {getInitials(table?.name)}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex items-center gap-3">
        <Separator
          className="mx-4 bg-rose-800 h-[57px]"
          orientation="vertical"
        />
        <li>
          <Button asChild variant="outline" roundness="full" size="small">
            <Link to="/">
              <Icon name="home" />
            </Link>
          </Button>
        </li>

        <li>
          <Button asChild variant="outline" roundness="full" size="small">
            <Link to="/account">
              <Icon name="users" />
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

export { AppSidebar };
