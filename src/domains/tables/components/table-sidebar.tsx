import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ParticpantsList } from "./participants";
import { TableChannels } from "./table-channels";
import { useParams } from "react-router-dom";
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
    <div className="table-sidebar bg-neutral-100 dark:bg-violet-800 shadow-main-right z-[2] grid grid-rows-[56px,1fr,1px,1fr] overflow-hidden">
      <div className="table-name shadow-main-bottom px-4 py-4 flex justify-between cursor-pointer hover:bg-rose-800 group transition-colors">
        <p className="text text-rose-800 dark:text-neutral-100 group-hover:text-neutral-100 uppercase">
          {table.name}
        </p>
      </div>

      <ParticpantsList tableParticipants={tableSocket.tableParticipants} />

      <Separator />

      <TableChannels channels={table.channels} />
    </div>
  );
};

export { TableSidebar };
