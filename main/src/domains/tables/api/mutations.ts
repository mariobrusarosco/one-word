import { restApi } from "@/api/rest";

const createTable = async (name: string) => {
  const result = await restApi.post("/tables", { name });

  return await result.data;
};

export { createTable };
