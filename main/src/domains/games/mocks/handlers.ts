import { HttpResponse, http } from "msw";
import { createGameFixture } from "./fixtures";

export const gamesHandlers = [
  http.get(`${import.meta.env.VITE_BASE_API_URL}/games`, async () => {
    const fakeGames = [createGameFixture()];

    return HttpResponse.json(fakeGames);
  }),
];
