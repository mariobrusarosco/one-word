import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <Outlet />
    </div>
  );
};
