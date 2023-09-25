import { z } from "zod";
import { tableFormSchema } from "./schemas";

export enum TableRoutes {
  HOME = "/tables",
}

export type TableInputData = z.infer<typeof tableFormSchema>;
