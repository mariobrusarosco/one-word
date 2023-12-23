import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// export const server = setupServer(
//   ...handlers[0].handlers,
//   ...handlers[1].handlers
// );

export const server = setupServer(...handlers);
