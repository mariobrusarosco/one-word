import { tablesHandlers } from "../domains/tables/mocks/handlers";
import { gamesHandlers } from "../domains/games/mocks/handlers";

export const handlers = [...tablesHandlers, ...gamesHandlers];
