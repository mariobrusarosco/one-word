import { api } from "@/api";

const createMessage = async ({
  content,
  channelId,
}: {
  content: string;
  channelId: string;
}) => {
  const result = await api.post(`/messages/${channelId}`, { content });

  return await result.data;
};

export { createMessage };
