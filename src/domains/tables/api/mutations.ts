import { restApi } from "@/api/rest";

const createTableMutation = async (name: string) => {
  const result = await restApi.post("/tables", { name });

  return await result.data;
};

const inviteFriendMutation = async ({
  email,
  tableId,
}: {
  tableId: string;
  email: string;
}) => {
  const result = await restApi.put(`/tables/${tableId}/seat`, { email });

  return await result.data;
};

export { createTableMutation, inviteFriendMutation };
