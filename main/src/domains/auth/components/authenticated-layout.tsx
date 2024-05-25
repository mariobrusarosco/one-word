import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../shared/components/navigation-bar";
import { Button } from "@/domains/ui-system/components/ui/button";
import { NavLink } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { ThemeModeToggle } from "./authenticated-menu/theme-mode-toggle";

export const AuthenticatedLayout = () => {
  return (
    <div
      data-layout="authenticated"
      className="h-dvh bg-teal-100 grid-rows-[88px,1fr,93px] desktop:grid-rows-[88px,1fr] grid desktop:grid-cols-[128px,1fr]"
    >
      <NavigationBar />

      <header className="sticky top-0 flex justify-between bg-pink-500 p-6 tablet:py-6 tablet:px-8 desktop:row-start-1 desktop:row-end-1 desktop:col-start-2 desktop:col-end-2  desktop:px-12 dark:bg-teal-800">
        <NavLink to="/">
          <Button variant="secondary">home</Button>
        </NavLink>

        <div className="flex gap-x-8 items-center">
          <ThemeModeToggle />

          <NavLink to="/account">
            <Button variant="outline" roundness="full" className="font-sans">
              MB
            </Button>
          </NavLink>
        </div>
      </header>

      <div className="app-content px-4 py-8 bg-white-100 dark:bg-pink-500 desktop:col-start-2  desktop:row-start-2 desktop:row-end-4 overflow-auto">
        <Outlet />
      </div>

      <AuthenticatedMenu />
    </div>
  );
};
