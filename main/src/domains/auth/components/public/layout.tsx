import { Outlet } from "react-router-dom";
import { PublicHeader } from "./header";

const PublicLayout = () => {
  return (
    <div data-ui="public-layout" className="h-dvh">
      <PublicHeader />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
