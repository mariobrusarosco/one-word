import { useQuery } from "@tanstack/react-query";
import { tableLoader, tablesLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ParticpantsList } from "./participants";
import { ActiveGame } from "@/domains/games/components/active-game";
import { TableSearch } from "@/domains/tables/components/table-search";
import { TableChannels } from "./table-channels";
import { useParams } from "react-router-dom";
import { useTableSocketConnection } from "../hooks/use-table-participants";

const TableSidebar = () => {
  const { tableId } = useParams<{
    tableId: string;
  }>();

  const tablesQuery = useQuery<ITable[]>({
    queryKey: ["tables"],
    queryFn: tablesLoader,
    enabled: false,
  });

  // ! This will be a good use case for Dependent Queries?
  const { data, error, isLoading } = useQuery<ITable>({
    queryKey: ["tables", { tableId }],
    queryFn: tableLoader,
    enabled: true,
  });

  // const tableSockectConnection = useTableSocketConnection();

  // console.log("[SOCKET DEBUG] tableSockectConnection", tableSockectConnection);

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading table...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="table-sidebar bg-white-100 dark:bg-teal-800 shadow-main-right z-[2] h-full overflow-hidden flex flex-col">
      <div className="table-name shadow-main-bottom px-4 py-4 flex justify-between cursor-pointer hover:bg-pink-500 group transition-colors">
        <p
          className="text-xl text-pink-500 group-hover:text-white-100"
          // onClick={() => {
          //   console.log("[SOCKET DEBUG] - label", tablesManager.label);
          // }}
        >
          {data.name}
        </p>
        <Icon
          name="chevron-down"
          className="stroke-pink-500 group-hover:stroke-white-100 transition-colors"
        />
      </div>

      <TableSearch />

      <ActiveGame />

      <div className="my-3">
        <Separator />
      </div>

      <ParticpantsList />

      <div className="my-3">
        <Separator />
      </div>

      <TableChannels />
    </div>
  );
};

export { TableSidebar };
