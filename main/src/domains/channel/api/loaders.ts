import { restApi } from "../../../api/rest";

export const loaderChannels = async () => {
  const result = await restApi.get("/tables");

  console.log("[LOADER]", result);

  return await result.data;
};
