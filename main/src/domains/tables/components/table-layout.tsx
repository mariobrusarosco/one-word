import { Outlet, useParams } from "react-router-dom";
import { TableSidebar } from "./table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";

const TableLayout = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const {
    data: table,
    error,
    isLoading,
  } = useQuery<ITable>({
    queryKey: ["tables", { tableId }],
    queryFn: tableLoader,
    enabled: !!tableId,
  });

  // const tableSocketManager = useTableConnection(tableId);

  if (isLoading) return <div>Loading table...</div>;

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!table) return null;

  return (
    <div
      data-ui="table-layout"
      className="grid desktop:grid-cols-[224px,1fr] desktop:h-ful overflow-hidden"
    >
      {/* h-[calc(100dvh-92px)] dark:bg-pink-500 grid desktop:grid-cols-[120px,1fr] */}
      <TableSidebar table={table} />

      <div data-ui="table-wrapper" className="p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default TableLayout;
