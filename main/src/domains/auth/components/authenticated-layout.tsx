import { Outlet } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

// grid-rows-[88px,100px,1fr,93px] desktop:grid-rows-[88px,1fr] grid desktop:grid-cols-[128px,1fr]

export const AuthenticatedLayout = () => {
  return (
    <div data-layout="authenticated" className="h-dvh">
      <AppHeader />
      {/* <AppSidebar /> */}
      <div className="app-content h-[calc(100dvh-92px)] dark:bg-pink-500 ">
        <Outlet />
      </div>

      <AuthenticatedMenu />
    </div>
  );
};
