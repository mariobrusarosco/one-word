import { useAuth0 } from "@auth0/auth0-react";
import type { AuthData, IMember } from "../../typing/enums-and-interfaces";

export const useOktaAuth0 = (): AuthData & {
  member: IMember | undefined;
  login: () => Promise<void>;
  logout: () => Promise<void>;
} => {
  const auth0 = useAuth0();

  return {
    isAuthenticated: auth0.isAuthenticated,
    isAuthenticating: auth0.isLoading,
    member: undefined,
    login: auth0.loginWithRedirect,
    logout: auth0.logout,
  };
}; 