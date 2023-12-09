import { Outlet } from "react-router-dom";

export const AuthenticatedLayout = () => {
  return (
    <div>
      <h1>AuthenticatedLayout</h1>
      <Outlet />
    </div>
  );
};
