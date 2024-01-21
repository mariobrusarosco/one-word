import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div data-layout="root">
      <Outlet />
    </div>
  );
};

export default RootLayout;
