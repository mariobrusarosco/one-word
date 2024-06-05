import { AppSidebar } from "@/domains/auth/components/app-sidebar";
import { Outlet } from "react-router-dom";

const TableLayout = () => {
  return (
    <div
      data-ui="table-layout"
      className="table-layout grid desktop:grid-cols-[120px,1fr] desktop:h-full"
    >
      <AppSidebar />

      <Outlet />
    </div>
  );
};

export { TableLayout };
