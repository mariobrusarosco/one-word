import { Outlet } from "react-router-dom";
import { AuthenticatedMenu } from "./menu/menu";
import { WebSocketProvider } from "@/domains/socket/providers/web-socket/provider";
import { Navbar } from "./navbar";

export const AuthenticatedLayout = () => {
  return (
    <WebSocketProvider>
      <div data-ui="authenticated-layout" className="h-dvh flex flex-col">
        <Navbar />
        <main
          data-ui="main-content"
          className="screen-bg flex-1 overflow-hidden"
        >
          <Outlet />
        </main>
        <AuthenticatedMenu />-
      </div>
    </WebSocketProvider>
  );
};
