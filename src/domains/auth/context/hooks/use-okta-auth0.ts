import { useAuth0 } from "@auth0/auth0-react";
import { AuthData } from "../../typing/enums-and-interfaces";

export const useOktaAuth0 = () => {
  const auth0 = useAuth0();

  return {
    isAuthenticated: auth0.isAuthenticated,
    isAuthenticating: auth0.isLoading,
  } satisfies AuthData;
}; 