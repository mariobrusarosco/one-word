import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../shared/components/navigation-bar";

export const AuthenticatedLayout = () => {
  return (
    <div style={{ border: "1px solid orange" }}>
      <h1>AuthenticatedLayout</h1>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
