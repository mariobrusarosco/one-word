import { Outlet, useParams } from "react-router-dom";
import { TableSidebar, TableSidebarLoading } from "./table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { useTableSocket } from "../hooks/use-table-socket";
import { useTableLoadingState } from "../hooks/use-table-loading-state";

const TableLayout = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const {
    data: table,
    error,
    isSuccess,
  } = useQuery<ITable>({
    queryKey: ["table", { tableId }],
    queryFn: tableLoader,
    enabled: !!tableId,
  });
  const tableSocket = useTableSocket(tableId);
  const nothingToRender = table === undefined && isSuccess;
  const { isFetching } = useTableLoadingState();

  if (!tableId) return null;

  if (error || nothingToRender) {
    return <div>{error?.message || "Something went wrong"}</div>;
  }

  return (
    <div
      data-ui="table-layout"
      className="grid lg:grid-cols-[224px,1fr] h-[calc(100vh-121px)]"
    >
      {isFetching ? (
        <TableSidebarLoading />
      ) : (
        table && <TableSidebar table={table} tableSocket={tableSocket} />
      )}

      <div data-ui="table-layout-content" className="p-12 overflow-hidden">
        <Outlet context={{ table, tableSocket }} />
      </div>
    </div>
  );
};

export default TableLayout;
