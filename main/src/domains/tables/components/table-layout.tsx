import { Outlet, useParams } from "react-router-dom";
import { TableSidebar } from "./table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { useTableSocket } from "../provider/use-table-socket";

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

  if (isLoading) return <div>Loading table...</div>;

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!table) return null;

  console.log("[DEBUG] 3.0", { tableSocket });

  return (
    <div
      data-ui="table-layout"
      className="grid desktop:h-full overflow-hidden desktop:grid-cols-[224px,1fr]"
    >
      <TableSidebar table={table} tableSocket={tableSocket} />

      <div data-ui="table-wrapper" className="p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default TableLayout;
