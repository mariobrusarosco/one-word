import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthenticatedMenu } from "./authenticated-menu/menu";
import { WebSocketProvider } from "@/domains/socket/providers/web-socket/provider";
import { useAuth } from "../../hooks/use-auth";
import { AppSidebar } from "./app-sidebar";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { data: authenticatedUser, isFetching } = useAuth({
    fetchOnMount: true,
  });

  if (isFetching) {
    return <div>Loading User...</div>;
  }

  if (!authenticatedUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export const AuthenticatedLayout = () => {
  return (
    <AuthProvider>
      <WebSocketProvider>
        <div data-ui="authenticated-layout" className="h-dvh">
          <AppSidebar />
          <main data-ui="main-content">
            <Outlet />
          </main>
          <AuthenticatedMenu />
        </div>
      </WebSocketProvider>
    </AuthProvider>
  );
};
