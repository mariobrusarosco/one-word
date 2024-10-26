import { api } from "@/api";
import { IMember } from "@/domains/auth/typing/enums-and-interfaces";

export const userLoader = async () => {
  const result = await api.get("/auth");

  return result.data as IMember;
};

export const memberLoader = async () => {
  const result = await api.get("/member");

  return result.data as IMember;
};
