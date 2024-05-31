import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
