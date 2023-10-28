import { z } from "zod";

export const tableFormSchema = z.object({
  name: z.string().min(1, {
    message: "You must type a name for the table",
  }),
  imageUrl: z.string(),
});
