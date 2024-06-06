import { ITable } from "../typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ParticpantsList } from "./participants";
import { TableSearch } from "@/domains/tables/components/table-search";
import { TableChannels } from "./table-channels";
import { useParams } from "react-router-dom";
import { ActiveGameDisplay } from "@/domains/games/components/active-game-display";
import { useTableSocket } from "../hooks/use-table-socket";

interface Props {
  table: ITable;
  tableSocket: ReturnType<typeof useTableSocket>;
}
const TableSidebar = ({ table, tableSocket }: Props) => {
  const { tableId } = useParams<{
    tableId: string;
  }>();

  if (!tableId) return null;

  return (
    <div className="table-sidebar bg-white-100 dark:bg-teal-800 shadow-main-right z-[2] h-full overflow-hidden flex flex-col">
      <div className="table-name shadow-main-bottom px-4 py-4 flex justify-between cursor-pointer hover:bg-pink-500 group transition-colors">
        <p className="text-xl text-pink-500 group-hover:text-white-100">
          {table.name}
        </p>
        <Icon
          name="chevron-down"
          className="stroke-pink-500 group-hover:stroke-white-100 transition-colors"
        />
      </div>

      <TableSearch />

      <ActiveGameDisplay />

      <div className="my-3">
        <Separator />
      </div>

      <ParticpantsList tableParticipants={tableSocket.tableParticipants} />

      <div className="my-3">
        <Separator />
      </div>

      <TableChannels channels={table.channels} />
    </div>
  );
};

export { TableSidebar };
