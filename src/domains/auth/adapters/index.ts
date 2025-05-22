import {
  ByPassAuthProvider,
  useAuthByPass,
} from "@/domains/auth/context/bypass";
import OktaAuth0Provider from "@/domains/auth/context/auth-0";
import { useOktaAuth0 } from "../context/hooks/use-okta-auth0";
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
  staging: { Provider: OktaAuth0Provider, hook: useOktaAuth0 },
  production: { Provider: OktaAuth0Provider, hook: useOktaAuth0 },
};
