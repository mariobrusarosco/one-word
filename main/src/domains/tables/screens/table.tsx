import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { tableLoader, tablesLoader } from "../api/loader";
import { ITable, Table } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useTables } from "../hooks/use-tables-delete";
import { useTableSocketConnection } from "../hooks/use-table-participants";

const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  // const tableSockectConnection = useTableSocketConnection();
  const { data, error, isFetching } = useQuery<ITable>({
    queryKey: ["tables", { tableId }],
    queryFn: tablesLoader,
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

  // const activeTable = tablesQuery.find(
  //   (table) => table.id === tableId
  // ) as ITable;

  return (
    <div className="table w-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {data.name}
        </p>
        <div>
          {/* {tableSockectConnection.participants.map((participant) => (
            <p key={participant.userId}>{participant.username}</p>
          ))} */}
        </div>
      </div>

      <Separator className="bg-teal-800 mt-3" />

      <Outlet />
    </div>
  );
};

export default TableScreen;
