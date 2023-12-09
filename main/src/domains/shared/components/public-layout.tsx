import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div>
      <h1>PublicLayout</h1>
      <Outlet />
    </div>
  );
};
