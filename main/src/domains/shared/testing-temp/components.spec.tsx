import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import {
  AsyncToggle,
  DynamicListGames,
  StaticListGames,
  Toggle,
} from "./components";
import { createReactQueryWrapper } from "../../../testing/utils";
import { server } from "../../../mocks/server";
import { HttpResponse, http } from "msw";
import { mockOneWordApi } from "../../../mocks/helpers";
import { debug } from "console";

describe("[UNIT] - StaticListGames", () => {
  describe("when rendering", () => {
    it("returns games heading", async () => {
      render(<StaticListGames />);

      expect(screen.getByText(/game 1/i)).toBeInTheDocument();
      expect(screen.getByText(/game 2/i)).toBeInTheDocument();
      expect(screen.getByText(/game 3/i)).toBeInTheDocument();
    });
  });
});

describe("[UNIT] - DynamicListGames", () => {
  describe("when rendering", () => {
    it("displays the loading UI and returns the expected games", async () => {
      render(<DynamicListGames />, { wrapper: createReactQueryWrapper() });

      await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

      expect(screen.getByText(/jumanji/i)).toBeInTheDocument();

      // Or
      //   await waitFor(() => {
      //     expect(screen.getByText(/jumanji/i));
      //   });
    });
  });

  describe.skip("when an error occcurs", () => {
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

      render(<DynamicListGames />, {
        wrapper: createReactQueryWrapper(),
      });

      screen.debug();
      expect(
        await screen.findByText(new RegExp(errorMessage, "i"))
      ).toBeInTheDocument();
    });
  });
});

describe.skip("[UNIT] - Toggle", () => {
  it("displays the toggle button and the hello message", async () => {
    render(<Toggle />);

    expect(screen.getByText(/toggle/i)).toBeInTheDocument();

    screen.getByText(/toggle/i).click();

    await waitFor(() => {
      expect(screen.getByText(/hello!/i)).toBeInTheDocument();
    });
  });
});

describe.skip("[UNIT] - AsyncToggle", () => {
  it.only("displays the async toggle button and the async hello message", async () => {
    render(<AsyncToggle />);

    debug();
    expect(screen.getByText(/async toggle/i)).toBeInTheDocument();

    act(() => {
      screen.getByText(/async toggle/i).click();
    });

    await waitFor(() => {
      expect(screen.findByText(/async hello!/i)).toBeInTheDocument();
    });
  });
});
