import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div data-layout="root" className="roo-layout">
      <Outlet />
    </div>
  );
};

export default RootLayout;
