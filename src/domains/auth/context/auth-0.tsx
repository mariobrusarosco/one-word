import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { AuthData } from "../typing/enums-and-interfaces";

export default function OktaAuth0Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export const useOktaAuth0 = () => {
  const auth0 = useAuth0();

  return {
    isAuthenticated: auth0.isAuthenticated,
    isAuthenticating: auth0.isLoading,
  } satisfies AuthData;
};
