import { restApi } from "../../../api/rest";

export const loaderTables = async () => {
  const result = await restApi.get("/tables");

  // TODO Add a debug mode here?!
  // console.log("[LOADER]-[TABLES]", result);

  return await result.data;
};
