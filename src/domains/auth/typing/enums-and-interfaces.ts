import { APP_MODES } from "@/domains/shared/typing";

export interface IMember {
  id: string;
  authServiceId: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type AuthMode = "signin" | "signup" | "logout" | "demo";

export type AuthData = {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
};

export type IAuthAdapter = Record<
  APP_MODES,
  {
    Provider: ({ children }: { children: React.ReactNode }) => JSX.Element;
    hook: () => AuthData | any;
  }
>;
