import { AppSidebar } from "@/domains/auth/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { TableSidebar } from "../components/table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { Table } from "../typing/interfaces";

//  desktop:grid-rows-[88px,1fr] grid desktop:grid-cols-[128px,1fr]

export const TablesScreen = () => {
  const { data } = useQuery<Table[]>({
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
