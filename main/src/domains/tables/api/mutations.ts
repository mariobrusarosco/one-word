import { restApi } from "@/api/rest";

const createTableMutation = async (name: string) => {
  const result = await restApi.post("/tables", { name });

  return await result.data;
};

export { createTableMutation };
