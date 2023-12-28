import { restApi } from "../../../api/rest";

export const loaderTables = async () => {
  const result = await restApi.get("/tables");

  console.log("[LOADER]", result);

  return await result.data;
};
