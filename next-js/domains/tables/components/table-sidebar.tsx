"use client";
import { useParams } from "next/navigation";
import { TableQueries } from "../server-side/queries";
import { TableHeading } from "./table-heading";
import isEmpty from "lodash-es/isEmpty";
import { TableMembers } from "./table-members";
import { Separator } from "@/domains/shared/components/ui/separator";
import { TableChannels } from "./table-channels";
import { useWebSocket } from "@/domains/shared/providers/web-socket";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const TableSidebar = ({ memberTables }: Props) => {
  const params = useParams() as { tableId: string };
  const table = memberTables?.find((table) => table.id === params.tableId);
  const { state } = useWebSocket();

  if (isEmpty(table)) return null;

  return (
    <aside className="flex flex-col bg-neutral-white shadow-right z-[1] min-w-[224px] h-screen">
      <TableHeading table={table} />

      <div className="px-4">
        {state.connected ? "connected" : "disconnected"}
        <Separator className="bg-primary-base mb-6" />
        <TableMembers table={table} />
        <Separator className="bg-primary-base my-6" />
        <TableChannels channels={table.channels} />
      </div>
    </aside>
  );
};
