import { Outlet, useParams } from "react-router-dom";
import { TableSidebar } from "./table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { TableSocketManager } from "../provider";

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

  if (isLoading) return <div>Loading table...</div>;

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!table) return null;

  return (
    <div
      data-ui="table-layout"
      className="grid desktop:grid-cols-[224px,1fr] desktop:h-ful"
    >
      <TableSidebar table={table} />

      <Outlet />
    </div>
  );
};

const TableLayoutWithProvider = () => {
  return (
    <TableSocketManager>
      <TableLayout />
    </TableSocketManager>
  );
};

export default TableLayoutWithProvider;
