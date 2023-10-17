import { z } from "zod";

export const messageFormSchema = z.object({
  content: z.string().min(1),
});
