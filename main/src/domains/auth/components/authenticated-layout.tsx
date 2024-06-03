import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { AppHeader } from "./app-header";
import { WebSocketProvider } from "@/domains/socket/providers/web-socket/provider";
import { useAuth } from "../hooks/use-auth";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { data, isFetching } = useAuth();

  if (isFetching) {
    return <div>Loading User...</div>;
  }

  if (!data) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div data-layout="auth" className="auth-layout">
      {children}
    </div>
  );
};

export const AuthenticatedLayout = () => {
  return (
    <AuthProvider>
      <WebSocketProvider>
        <div data-layout="authenticated" className="h-dvh">
          <AppHeader />

          <div className="app-content h-[calc(100dvh-92px)] dark:bg-pink-500 ">
            <Outlet />
          </div>

          <AuthenticatedMenu />
        </div>
      </WebSocketProvider>
    </AuthProvider>
  );
};
