import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <h1>PublicLayout</h1>
      <Outlet />
    </div>
  );
};
