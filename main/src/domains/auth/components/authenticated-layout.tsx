import { Outlet } from "react-router-dom";

export const AuthenticatedLayout = () => {
  return (
    <div style={{ border: "1px solid orange" }}>
      <h1>AuthenticatedLayout</h1>
      <Outlet />
    </div>
  );
};
