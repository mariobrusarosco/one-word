import { restApi } from "@/api/rest";
import { IMember } from "../typing/interfaces";

export const userLoader = async () => {
  const result = await restApi.get("/auth");

  return result.data as IMember;
};

export const memberLoader = async ({ queryKey }: { queryKey: any }) => {
  const [, { providerId }] = queryKey;

  console.log("[AUTH] 2", queryKey);

  const result = await restApi.get("/member");

  return result.data as IMember;
};