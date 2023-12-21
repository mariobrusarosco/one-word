import { restApi } from "../../../api/rest";

export const loaderTables = async () => {
  const result = await restApi.get("/tables");

  return await result.data;
};
