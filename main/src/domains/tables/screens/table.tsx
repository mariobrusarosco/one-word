import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { loaderTables } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  // const { tableParticipants } = useTables();

  const { data, error, isFetching } = useQuery<ITable[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading tables...</div>;
  }

  if (!data) return null;

  const activeTable = data.find((table) => table.id === tableId) as ITable;

  return (
    <div className="table w-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {activeTable.name}
        </p>
      </div>

      <Separator className="bg-teal-800 mt-3" />

      <Outlet />
    </div>
  );
};
