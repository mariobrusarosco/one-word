import { api } from "../../../api";

export const loaderGames = async () => {
  const response = await api.get("/games");

  console.warn(response);

  // if (!response.status) {
  //   throw new Error(response.statusText);
  // }

  const result = await response.data;
  return result;
};
