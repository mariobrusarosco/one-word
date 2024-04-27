import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div data-layout="root" className="container">
      <Outlet />
    </div>
  );
};

export default RootLayout;
