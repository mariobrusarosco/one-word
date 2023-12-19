import { HttpResponse, http } from "msw";
import { createGameFixture } from "./fixtures";
import { mockOneWordApi } from "../../../mocks/helpers";

export const gamesHandlers = [
  http.get(mockOneWordApi("/games"), async () => {
    const fakeGames = [createGameFixture()];

    return HttpResponse.json(fakeGames);
  }),
];
