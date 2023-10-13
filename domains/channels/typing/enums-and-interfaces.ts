import { z } from "zod";
import { channelFormSchema } from "./schemas";

export enum TableRoutes {
  HOME = "/channels",
}

export type ChannelInputData = z.infer<typeof channelFormSchema>;
