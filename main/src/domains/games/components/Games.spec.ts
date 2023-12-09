import { expect, describe, it } from "vitest";
import { mockOneWordApi } from "../../../mocks/helpers";

describe("when fetching Games endpoint", () => {
  it("returns the expected data", async () => {
    const response = await fetch(mockOneWordApi("/games"));

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual([{ name: "Jumanji" }]);
  });
});
