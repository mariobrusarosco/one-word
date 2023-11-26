import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/mocks/server";

console.warn("------- PERFORMING THINGS BEFORE RUNINNG TESTS");

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
