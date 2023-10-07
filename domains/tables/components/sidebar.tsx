"use client";
import { useParams, useRouter } from "next/navigation";
import { TableQueries } from "../server-side/queries";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const TableSidebar = async ({ memberTables }: Props) => {
  const router = useRouter();
  const params = useParams() as { tablesId: string };
  const table = memberTables?.find((table) => table.id === params.tablesId);

  return (
    <aside className="flex flex-col bg-neutral-white shadow-main z-[1] h-screen">
      <div className="flex justify-between">
        <h2 className="text-primary-base text-sm">{table?.name}</h2>
        <span>x</span>
      </div>
    </aside>
  );
};
