import { restApi } from "../../../api/rest";

export const loaderGames = async () => {
  const result = await restApi.get("/games");

  return await result.data;
};
