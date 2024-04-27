import { restApi } from "../../../api/rest";

export const loaderTables = async () => {
  const response = await restApi.get("/tables");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  console.log("[LOADER]", response);

  return await response.data;
};
