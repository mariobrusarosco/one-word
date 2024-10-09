import { restApi } from "@/api/rest";

const createMessage = async ({
  content,
  channelId,
}: {
  content: string;
  channelId: string;
}) => {
  const result = await restApi.post(`/messages/${channelId}`, { content });

  return await result.data;
};

export { createMessage };
