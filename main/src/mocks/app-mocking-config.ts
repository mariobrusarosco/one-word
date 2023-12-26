import { tablesHandlers } from "../domains/tables/mocks/handlers";
import { gamesHandlers } from "../domains/games/mocks/handlers";
import { authHandlers } from "../domains/auth/mocks/handlers";
import { RequestHandler } from "msw";

interface MockingConfig {
  handlers: RequestHandler[];
  mockOnBrowser: boolean;
  mockOnTests: boolean;
}

export const applicationMockingConfig: MockingConfig[] = [
  { handlers: tablesHandlers, mockOnBrowser: true, mockOnTests: true },
  { handlers: gamesHandlers, mockOnBrowser: true, mockOnTests: true },
  { handlers: authHandlers, mockOnBrowser: true, mockOnTests: true },
];
