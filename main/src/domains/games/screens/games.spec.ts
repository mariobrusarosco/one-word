import { expect, describe, it } from "vitest";

describe("when fetching Games endpoint", () => {
  it("returns the expected data", async () => {
    const response = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/games`);

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual([{ name: "Jumanji" }]);
  });
});
