import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Root Layout</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
