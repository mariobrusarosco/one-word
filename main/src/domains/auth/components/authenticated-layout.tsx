import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../shared/components/navigation-bar";
import { Button } from "@/domains/ui-system/components/ui/button";
import { NavLink } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu";

export const AuthenticatedLayout = () => {
  return (
    <div data-layout="authenticated" className="h-dvh bg-teal-100 flex">
      <NavigationBar />

      <div className="w-full">
        <header className="flex justify-between bg-pink-500 p-6 tablet:py-6 tablet:px-8 desktop:px-12 dark:bg-teal-800">
          <NavLink to="/">
            <Button variant="secondary">home</Button>
          </NavLink>
          <NavLink to="/account">
            <Button variant="outline" roundness="full" className="">
              MB
            </Button>
          </NavLink>
        </header>

        <div className="app-content">
          <Outlet />
        </div>

        <AuthenticatedMenu />
      </div>
    </div>
  );
};
