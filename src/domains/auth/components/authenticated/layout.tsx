import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthenticatedMenu } from "./menu/menu";
import { WebSocketProvider } from "@/domains/socket/providers/web-socket/provider";
import { Navbar } from "./navbar";
import { useAuth } from "../../context";

export const AuthenticatedLayout = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.isAuthenticating) {
    return <div>loading</div>;
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

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
  // }
};
