import { setupWorker } from "msw/browser";
import { applicationMockingConfig } from "./app-mocking-config";

const mapForOnlyBrowserMocking = applicationMockingConfig.flatMap(
  (mockingConfig) => (mockingConfig.mockOnBrowser ? mockingConfig.handlers : [])
);

export const worker = setupWorker(...mapForOnlyBrowserMocking);
