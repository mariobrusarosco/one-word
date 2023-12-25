import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { DynamicListGames, StaticListGames, Toggle } from "./components";
import {
  createReactQueryWrapper,
  setupAndRender,
} from "../../../testing/utils";
import { server } from "../../../mocks/server";
import { HttpResponse, http } from "msw";
import { mockOneWordApi } from "../../../mocks/helpers";

describe("[UNIT] - StaticListGames", () => {
  describe("when rendering", () => {
    it("returns games heading", async () => {
      setupAndRender(<StaticListGames />);

      expect(screen.getByText(/game 1/i)).toBeInTheDocument();
      expect(screen.getByText(/game 2/i)).toBeInTheDocument();
      expect(screen.getByText(/game 3/i)).toBeInTheDocument();
    });
  });
});

describe("[UNIT] - DynamicListGames", () => {
  describe("when rendering", () => {
    it("displays the loading UI and returns the expected games", async () => {
      setupAndRender(<DynamicListGames />, {
        wrapper: createReactQueryWrapper(),
      });

      await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

      expect(screen.getByText(/jumanji/i)).toBeInTheDocument();

      // Or
      //   await waitFor(() => {
      //     expect(screen.getByText(/jumanji/i));
      //   });
    });
  });

  describe("when an error occcurs", () => {
    it("returns the expected error message", async () => {
      const errorMessage = "API ERROR";
      server.use(
        http.get(mockOneWordApi("/games"), () => {
          return new HttpResponse(null, {
            status: 500,
            statusText: errorMessage,
          });
        })
      );

      setupAndRender(<DynamicListGames />, {
        wrapper: createReactQueryWrapper(),
      });

      expect(
        await screen.findByText(new RegExp(errorMessage, "i"))
      ).toBeInTheDocument();
    });
  });
});
