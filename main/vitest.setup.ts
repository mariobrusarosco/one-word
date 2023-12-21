import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/mocks/server";

/* [REASONING]
 * Even thhough we are not using jest, we still need to import the jest-dom
 * library, since it is used by the testing-library and we want to have the same Matchers like
 * toBeInTheDocument() available in our tests.
 * (https://github.com/chaance/vitest-dom)
 */
import "@testing-library/jest-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
