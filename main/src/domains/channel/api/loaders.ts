import { restApi } from "../../../api/rest";
import { IChannelWithMessages } from "../typing/interfaces";

export const loaderChannels = async (channelId: string) => {
  const result = await restApi.get("/channels/" + channelId);

  console.log("[LOADER] - [CHANNEL]", result);

  return (await result.data) as IChannelWithMessages;
};
