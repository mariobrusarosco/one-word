import { z } from "zod";

export const channelFormSchema = z.object({
  name: z.string().min(1, {
    message: "You must type a name for the channel",
  }),
});
