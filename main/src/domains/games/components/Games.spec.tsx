import { render, screen } from "@testing-library/react";
import { Games } from "./Games";

describe("[INTEGRATION] - when fetching Games", () => {
  it("returns the expected data", async () => {
    const response = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/games`);

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual([{ name: "Jumanji" }]);
  });
});

describe.only("[UNIT] - when rendering", () => {
  it("returns the expected element", async () => {
    render(<Games />);

    expect(screen.getByText(/games/i)).toBeInTheDocument();
  });
});
