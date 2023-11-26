import { HttpResponse, http } from "msw";

export const gamesHandlers = [
  http.get(`${import.meta.env.VITE_BASE_API_URL}/games`, async () => {
    const fakeGames = [{ name: "Jumanji" }];

    return HttpResponse.json(fakeGames);
  }),
];
