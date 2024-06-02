import { AppSidebar } from "@/domains/auth/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { TableSidebar } from "../components/table-sidebar";
import { useQuery } from "@tanstack/react-query";
import { tablesLoader } from "../api/loader";
import { Table } from "../typing/interfaces";
import { TablesProvider } from "../provider";
// import { Suspense } from "react";

const TablesScreen = () => {
  useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: tablesLoader,
    enabled: true,
  });

  return (
    // <Suspense fallback={<div>...Loading...</div>}>
    <div className="grid desktop:grid-cols-[120px,224px,1fr] desktop: h-full">
      <AppSidebar />
      <TableSidebar />
      <Outlet />
    </div>
    // </Suspense>
  );
};

const TablesWithContext = () => {
  return (
    <TablesProvider>
      <TablesScreen />
    </TablesProvider>
  );
};

export default TablesWithContext;
