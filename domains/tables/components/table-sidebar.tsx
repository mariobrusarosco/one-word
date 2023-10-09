"use client";
import { useParams, useRouter } from "next/navigation";
import { TableQueries } from "../server-side/queries";
import { TableHeading } from "./table-heading";
import isEmpty from "lodash-es/isEmpty";
import { TableParticipants } from "./table-participants";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const TableSidebar = async ({ memberTables }: Props) => {
  const router = useRouter();
  const params = useParams() as { tablesId: string };
  const table = memberTables?.find((table) => table.id === params.tablesId);

  if (isEmpty(table)) return null;

  return (
    <aside className="flex flex-col bg-neutral-white shadow-right z-[1] min-w-[224px] h-screen">
      <TableHeading table={table} />

      <TableParticipants table={table} />
    </aside>
  );
};
