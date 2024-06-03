import { AppSidebar } from "@/domains/auth/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { TableSidebar } from "../components/table-sidebar";
import { TablesProvider } from "../provider";

const TablesScreen = () => {
  return (
    <div className="grid desktop:grid-cols-[120px,224px,1fr] desktop: h-full">
      <AppSidebar />
      <TableSidebar />
      <Outlet />
    </div>
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
