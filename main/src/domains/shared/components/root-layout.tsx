import { WebSocketProvider } from "@/domains/socket/providers/web-socket/provider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div data-layout="root" className="root-layout">
      <WebSocketProvider>
        <Outlet />
      </WebSocketProvider>
    </div>
  );
};

export default RootLayout;
