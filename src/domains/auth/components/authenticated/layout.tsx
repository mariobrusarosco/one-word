import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthenticatedMenu } from "./menu/menu";
import { WebSocketProvider } from "@/domains/socket/providers/web-socket/provider";
import { Navbar } from "./navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useMember } from "@/domains/member/hooks/use-member";
import { useAppAuth } from "../../hooks/use-app-auth";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { member } = useAppAuth();
  // const member = useMember();

  console.log("[AUTH GUARD]", {
    member,
    //   member,
  });

  if (member.isLoading) {
    return <div>Loading User...</div>;
  }

  if (!member.data) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export const AuthenticatedLayout = () => {
  return (
    <AuthGuard>
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
    </AuthGuard>
  );
};
