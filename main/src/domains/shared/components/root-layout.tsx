import { Toaster } from "@/domains/ui-system/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div data-layout="root" className="root-layout">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default RootLayout;
