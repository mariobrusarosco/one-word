import { PublicHeader } from "@/domains/auth/public/components/header/header";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <PublicHeader />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
