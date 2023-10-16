import { z } from "zod";
import { channelFormSchema } from "./schemas";

export enum ChannelRoutes {
  HOME = "/channels",
}

export type ChannelInputData = z.infer<typeof channelFormSchema>;
