import { HttpResponse, http } from "msw";

export const gamesHandlers = [
  http.get(`${import.meta.env.VITE_ONE_WORD_API}/games`, async () => {
    const fakeGames = [{ name: "Jumanji" }];

    return HttpResponse.json(fakeGames);
  }),
];
