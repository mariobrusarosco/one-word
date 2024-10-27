import { api } from "@/api";

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
