import { Outlet } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export const AuthenticatedLayout = () => {
  return (
    <div
      data-layout="authenticated"
      className="h-dvh grid-rows-[88px,100px,1fr,93px] desktop:grid-rows-[88px,1fr] grid desktop:grid-cols-[128px,1fr]"
    >
      <AppHeader />
      <AppSidebar />
      <div className="app-content h-[calc(100dvh-88px)] px-4 py-4 dark:bg-pink-500 desktop:col-start-2 desktop:p-10">
        <Outlet />
      </div>

      <AuthenticatedMenu />
    </div>
  );
};
