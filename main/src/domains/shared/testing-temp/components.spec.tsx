import { render, screen, waitFor } from "@testing-library/react";
import { DynamicListGames, StaticListGames } from "./components";
import { createReactQueryWrapper } from "../../../testing/utils";

describe("[UNIT] - StaticListGames", () => {
  describe("when rendering", () => {
    it("returns games heading", async () => {
      render(<StaticListGames />);

      expect(screen.findByText(/game 1/i)).toBeInTheDocument();
      expect(screen.findByText(/game 2/i)).toBeInTheDocument();
      expect(screen.findByText(/game 3/i)).toBeInTheDocument();
    });
  });
});

describe.only("[UNIT] - DynamicListGames", () => {
  describe("when rendering", () => {
    it("returns the expected games", async () => {
      render(<DynamicListGames />, { wrapper: createReactQueryWrapper() });

      expect(await screen.findByText(/jumanji/i)).toBeInTheDocument();

      // Or
      //   await waitFor(() => {
      //     expect(screen.getByText(/jumanji/i));
      //   });
    });
  });
});
