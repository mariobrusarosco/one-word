import { restApi } from "../../../api/rest";

export const loaderGames = async () => {
  const response = await restApi.get("/games");

  console.warn(response);

  if (!response.status) {
    throw new Error(response.statusText);
  }

  const result = await response.data;
  return result;
};
