import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ParticpantsList, ParticpantsListLoading } from "./participants";
import { TableChannels, TableChannelsLoading } from "./table-channels";
import { useParams } from "react-router-dom";
import { useTableSocket } from "../hooks/use-table-socket";
import {
  TableName,
  TableNameLoading,
} from "@/domains/tables/components/table-name";

interface Props {
  table: ITable;
  tableSocket: ReturnType<typeof useTableSocket>;
}

export const TableSidebar = ({ table, tableSocket }: Props) => {
  const { tableId } = useParams<{
    tableId: string;
  }>();

  if (!tableId) return null;

  return (
    <div className="table-sidebar bg-neutral-100 dark:bg-violet-800 shadow-main-right z-[2] grid grid-rows-[56px,1fr,1px,1fr] overflow-hidden">
      <TableName table={table} />
      <ParticpantsList tableParticipants={tableSocket.tableParticipants} />
      <Separator />

      <TableChannels channels={table.channels} />
    </div>
  );
};

export const TableSidebarLoading = () => {
  return (
    <div className="table-sidebar bg-neutral-100 dark:bg-violet-800 shadow-main-right z-[2] grid grid-rows-[56px,1fr,1px,1fr] overflow-hidden">
      <TableNameLoading />
      <ParticpantsListLoading />
      <Separator />
      <TableChannelsLoading />
    </div>
  );
};
