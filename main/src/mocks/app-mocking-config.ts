import { tablesHandlers } from "../domains/tables/mocks/handlers";
import { gamesHandlers } from "../domains/games/mocks/handlers";
import { authHandlers } from "../domains/auth/mocks/handlers";

interface MockingConfig {
  handlers: RequestHandler[];
  mockOnBrowser: boolean;
  mockOnTests: boolean;
}

export const applicationMockingConfig: MockingConfig[] = [
  { handlers: tablesHandlers, mockOnBrowser: false, mockOnTests: true },
  { handlers: gamesHandlers, mockOnBrowser: false, mockOnTests: true },
  { handlers: authHandlers, mockOnBrowser: true, mockOnTests: true },
];
