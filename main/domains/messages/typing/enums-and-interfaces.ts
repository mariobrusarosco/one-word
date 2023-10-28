import { z } from "zod";
import { messageFormSchema } from "./schemas";

export type MessageInputData = z.infer<typeof messageFormSchema>;
