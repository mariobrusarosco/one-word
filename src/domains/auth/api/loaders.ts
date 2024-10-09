import { restApi } from "@/api/rest";
import { AuthMode, IMember } from "../typing/enums-and-interfaces";

export const userLoader = async () => {
  const result = await restApi.get("/auth");

  return result.data as IMember;
};

export const memberLoader = async ({ queryKey }: { queryKey: any }) => {
  const [, { providerId }] = queryKey;

  console.log("[AUTH] 2", queryKey);

  const result = await restApi.get("/auth", {
    params: { providerId },
  });

  return result.data as IMember;
};

export const authenticateViaCookie = async (
  publicId: string,
  mode: AuthMode
) => {
  const result = await restApi.get("/auth", { params: { publicId, mode } });

  return await result.data;
};
