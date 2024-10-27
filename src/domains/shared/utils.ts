import { APP_MODES } from "@/domains/shared/typing";

console.log(import.meta.env.MODE);
export const APP_MODE = import.meta.env.MODE as APP_MODES;
