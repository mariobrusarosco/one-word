import { useMember } from "@/domains/member/hooks/use-member";
import { createContext, useContext } from "react";
import type { AuthHookResult } from "../typing/enums-and-interfaces";
import { useAuthentication } from "../hooks/use-authentication";

export const ByPassAuthContext = createContext<AuthHookResult | undefined>(undefined);

export const ByPassAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const member = useMember(true);
  const authentication = useAuthentication();

  const isAuthenticating = member.isLoading || authentication.isLoading;
  const isAuthenticated = !isAuthenticating && !!member.data;

  const authData: AuthHookResult = {
    isAuthenticated,
    isAuthenticating,
    member: member.data,
    login: async () => {},
    logout: async () => {},
  };

  return (
    <ByPassAuthContext.Provider value={authData}>
      {children}
    </ByPassAuthContext.Provider>
  );
};

export const useAuthByPass = (): AuthHookResult => {
  const context = useContext(ByPassAuthContext);

  if (context === undefined)
    throw new Error(
      "useReactContextAdapter must be used within a ByPassAuthProvider"
    );

  return context;
};
