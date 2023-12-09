import { tablesHandlers } from "../domains/tables/mocks/handlers";
import { gamesHandlers } from "../domains/games/mocks/handlers";
import { learningsHandlers } from "../domains/shared/mocks/handlers";

export const handlers = [
  ...tablesHandlers,
  ...gamesHandlers,
  ...learningsHandlers,
];
