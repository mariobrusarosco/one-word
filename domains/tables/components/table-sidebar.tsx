"use client";
import { useParams, useRouter } from "next/navigation";
import { TableQueries } from "../server-side/queries";
import { TableHeading } from "./table-heading";
import isEmpty from "lodash-es/isEmpty";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const TableSidebar = async ({ memberTables }: Props) => {
  const router = useRouter();
  const params = useParams() as { tablesId: string };
  const table = memberTables?.find((table) => table.id === params.tablesId);

  if (isEmpty(table)) return null;

  return (
    <aside className="flex flex-col bg-neutral-white shadow-right z-[1] h-screen">
      {isEmpty(table) ? null : (
        <>
          <TableHeading table={table} />

          <button onClick={() => router.push(`/invite/${table?.inviteCode}`)}>
            temp invititation
          </button>
        </>
      )}
    </aside>
  );
};
