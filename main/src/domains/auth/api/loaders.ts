import { restApi } from "@/api/rest";
import { IMember } from "../typing/interfaces";

export const userLoader = async () => {
  const result = await restApi.get("/auth");

  return result.data as IMember;
};
