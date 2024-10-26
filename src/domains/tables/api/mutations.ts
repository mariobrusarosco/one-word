import { api } from "@/api";

const createTableMutation = async (name: string) => {
  const result = await api.post("/tables", { name });

  return await result.data;
};

const inviteFriendMutation = async ({
  email,
  tableId,
}: {
  tableId: string;
  email: string;
}) => {
  const result = await api.put(`/tables/${tableId}/seat`, { email });

  return await result.data;
};

export { createTableMutation, inviteFriendMutation };
