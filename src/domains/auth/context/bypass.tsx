import { useMember } from "@/domains/member/hooks/use-member";
import { createContext } from "react";
import { AuthData } from "../typing/enums-and-interfaces";
import { useAuthentication } from "../hooks/use-authentication";

export const ByPassAuthContext = createContext<AuthData | undefined>(undefined);

export const ByPassAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const member = useMember(true);
  const authentication = useAuthentication();

  const isAuthenticating = member.isLoading || authentication.isLoading;
  const isAuthenticated = !isAuthenticating && !!member.data;

  const authData: AuthData = {
    isAuthenticated,
    isAuthenticating,
  };

  return (
    <ByPassAuthContext.Provider value={authData}>
      {children}
    </ByPassAuthContext.Provider>
  );
};
