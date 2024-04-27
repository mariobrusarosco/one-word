import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../shared/components/navigation-bar";

export const AuthenticatedLayout = () => {
  return (
    <div data-layout="authenticated" className="flex">
      <NavigationBar />
      <Outlet />
    </div>
  );
};
