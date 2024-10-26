import { QueryKey } from "@tanstack/react-query";
import { api } from "../../../api";
import { IChannel } from "../typing/interfaces";

export const channelLoader = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [, { channelId }] = queryKey as [string, { channelId: string }];
  const result = await api.get("/channels/" + channelId);

  return (await result.data) as IChannel;
};
