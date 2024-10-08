export interface IMember {
  id: string;
  authServiceId: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type AuthMode = "signin" | "signup" | "logout";
