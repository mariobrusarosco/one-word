import { api } from "../../../api";
import { PageWithIMessages } from "../typing/interfaces";

export const loaderPaginatedMessages = async ({
  pageParam,
  channelId,
  take,
}: {
  pageParam: number;
  channelId?: string;
  take: number;
}) => {
  if (!channelId) return;

  const result = await api.get(`/messages/${channelId}`, {
    params: {
      take,
      cursor: pageParam,
    },
  });

  return (await result.data) as PageWithIMessages;
};
