import { setupServer } from "msw/node";

import { applicationMockingConfig } from "./app-mocking-config";

const mapForOnlyBrowserMocking = applicationMockingConfig.flatMap(
  (mockingConfig) => (mockingConfig.mockOnTests ? mockingConfig.handlers : [])
);

export const server = setupServer(...mapForOnlyBrowserMocking);
