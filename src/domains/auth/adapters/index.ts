import { useAuth0 } from "@auth0/auth0-react";
import {
  ByPassAuthProvider,
  useAuthByPass,
} from "@/domains/auth/context/bypass";
import OktaAuth0Provider from "@/domains/auth/context/auth-0";
import { IAuthAdapter } from "../typing/enums-and-interfaces";

export const Authentication: IAuthAdapter = {
  "local-dev": {
    Provider: ByPassAuthProvider,
    hook: useAuthByPass,
  },
  demo: {
    Provider: ByPassAuthProvider,
    hook: useAuthByPass,
  },
  staging: { Provider: OktaAuth0Provider, hook: useAuth0 },
  production: { Provider: OktaAuth0Provider, hook: useAuth0 },
};
