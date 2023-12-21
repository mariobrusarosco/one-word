import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
