"use client";
import { useParams } from "next/navigation";
import { TableQueries } from "../server-side/queries";
import { TableHeading } from "./table-heading";
import isEmpty from "lodash-es/isEmpty";
import { TableMembers } from "./table-members";
import { Separator } from "@/domains/shared/components/ui/separator";
import { Settings } from "lucide-react";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const TableSidebar = ({ memberTables }: Props) => {
  const params = useParams() as { tablesId: string };
  const table = memberTables?.find((table) => table.id === params.tablesId);

  if (isEmpty(table)) return null;

  return (
    <aside className="flex flex-col bg-neutral-white shadow-right z-[1] min-w-[224px] h-screen">
      <TableHeading table={table} />

      <div className="px-3">
        <Separator className="bg-primary-base mb-4" />
        <div className="flex justify-between align-center mb-4">
          <h2 className="text-primary-base text-sm font-semibold">
            PARTICIPANTS
          </h2>
          <Settings className="w-[18px] h-[18px] text-primary-base" />
        </div>
        <TableMembers table={table} />
      </div>
    </aside>
  );
};
