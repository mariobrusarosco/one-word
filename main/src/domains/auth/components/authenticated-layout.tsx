import { Outlet } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export const AuthenticatedLayout = () => {
  return (
    <div
      data-layout="authenticated"
      className="h-dvh bg-teal-100 grid-rows-[88px,1fr,93px] desktop:grid-rows-[88px,1fr] grid desktop:grid-cols-[128px,1fr]"
    >
      <AppHeader />

      <div className="app-content overflow-auto px-4 py-8 bg-white-100 dark:bg-pink-500 desktop:col-start-2  desktop:row-start-2 desktop:row-end-4 desktop:px-12">
        <AppSidebar />
        <Outlet />
      </div>

      <AuthenticatedMenu />
    </div>
  );
};
