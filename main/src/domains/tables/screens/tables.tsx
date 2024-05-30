import { AppSidebar } from "@/domains/auth/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { TableSidebar } from "../components/table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { Table } from "../typing/interfaces";

export const TablesScreen = () => {
  useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: true,
  });

  return (
    <div className="grid desktop:grid-cols-[120px,224px,1fr] desktop: h-full">
      <AppSidebar />
      <TableSidebar />
      <Outlet />
    </div>
  );
};
