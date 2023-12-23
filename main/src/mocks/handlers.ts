import { tablesHandlers } from "../domains/tables/mocks/handlers";
import { gamesHandlers } from "../domains/games/mocks/handlers";
import { RequestHandler } from "msw";
import { authHandlers } from "../domains/auth/mocks/handlers";

type DomainMockHandler = {
  handlers: RequestHandler[];
  server: boolean;
  browser: boolean;
};

export const handlers = [...tablesHandlers, ...gamesHandlers, ...authHandlers];

export const handlersTemp = [
  {
    handlers: tablesHandlers,
    server: true,
    browser: true,
  },
  {
    handlers: gamesHandlers,
    server: false,
    browser: true,
  },
] satisfies DomainMockHandler[];
