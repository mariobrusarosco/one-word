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
    isSuccess,
  } = useQuery<ITable>({
    queryKey: ["table", { tableId }],
    queryFn: tableLoader,
    enabled: !!tableId,
  });
  const nothingToRender = table === undefined && isSuccess;

  if (!tableId) return null;

  if (error || nothingToRender) {
    return <div>{error?.message || "Something went wrong"}</div>;
  }

  return (
    <div
      data-ui="table-layout"
      className="grid lg:grid-cols-[224px,1fr] h-[calc(100vh-121px)]"
    >
      <TableSidebar />

      <div data-ui="table-layout-content" className="p-12 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default TableLayout;
