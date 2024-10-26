import { api } from "@/api";
import { AuthMode } from "../typing/enums-and-interfaces";

export const authenticateViaCookie = async (
  publicId: string,
  mode: AuthMode
) => {
  const result = await api.get("/auth", { params: { publicId, mode } });

  return await result.data;
};
