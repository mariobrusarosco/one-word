import { restApi } from "@/api/rest";

export const userLoader = async () => {
  const result = await restApi.get("/auth", {
    headers: {
      "X-Auth-Demo": true,
    },
  });

  return result.data;
};
