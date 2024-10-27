import { api } from "@/api";
import { AuthMode } from "../typing/enums-and-interfaces";

export type AuthenticationPayload =
  | {
      email: string;
      password: string;
      mode: "emailAndPass";
    }
  | { publicId: string; mode: "social" };

export const authenticateViaCookie = async (publicId?: string) => {
  const result = await api.get("/auth", { params: { publicId } });

  return await result.data;
};
