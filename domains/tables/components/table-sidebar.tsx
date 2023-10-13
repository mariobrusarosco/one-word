"use client";
import { useParams } from "next/navigation";
import { TableQueries } from "../server-side/queries";
import { TableHeading } from "./table-heading";
import isEmpty from "lodash-es/isEmpty";
import { TableMembers } from "./table-members";
import { Separator } from "@/domains/shared/components/ui/separator";
import { Plus, Settings } from "lucide-react";
import { channel } from "diagnostics_channel";
import { TableChannels } from "./table-channels";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const TableSidebar = ({ memberTables }: Props) => {
  const params = useParams() as { tablesId: string };
  const table = memberTables?.find((table) => table.id === params.tablesId);

  if (isEmpty(table)) return null;

  console.log({ table });
  return (
    <aside className="flex flex-col bg-neutral-white shadow-right z-[1] min-w-[224px] h-screen">
      <TableHeading table={table} />

      <div className="px-4">
        <Separator className="bg-primary-base mb-6" />
        <div className="flex justify-between align-center mb-3">
          <h2 className="text-primary-base text-sm font-semibold">
            PARTICIPANTS
          </h2>
          <Settings className="w-[18px] h-[18px] text-primary-base" />
        </div>
        <TableMembers table={table} />

        <Separator className="bg-primary-base my-6" />
        <div className="flex justify-between align-center mb-3">
          <h2 className="text-primary-base text-sm font-semibold">CHANNELS</h2>
          <Plus className="w-[18px] h-[18px] text-primary-base" />
        </div>
        <TableChannels channels={table.channels} />
      </div>
    </aside>
  );
};
