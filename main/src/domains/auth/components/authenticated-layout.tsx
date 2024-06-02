import { Outlet } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { AppHeader } from "./app-header";

export const AuthenticatedLayout = () => {
  return (
    <div data-layout="authenticated" className="h-dvh">
      <AppHeader />

      <div className="app-content h-[calc(100dvh-92px)] dark:bg-pink-500 ">
        <Outlet />
      </div>

      <AuthenticatedMenu />
    </div>
  );
};
