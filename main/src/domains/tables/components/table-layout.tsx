import { Outlet, useParams } from "react-router-dom";
import { TableSidebar } from "./table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { useTableSocket } from "../hooks/use-table-socket";

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
  const tableSocket = useTableSocket(tableId);

  if (isLoading) return <div>Loading tables...</div>;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      data-ui="table-layout"
      className="grid lg:grid-cols-[224px,1fr] h-full"
    >
      {table ? <TableSidebar table={table} tableSocket={tableSocket} /> : null}

      <Outlet context={{ table, tableSocket }} />
    </div>
  );
};

export default TableLayout;
