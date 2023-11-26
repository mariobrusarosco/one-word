import { http, HttpResponse, bypass, delay } from "msw";

export const handlers = [
  http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, async () => {
    return HttpResponse.json([{ name: "Skol" }]);
  }),

  http.get(
    `${import.meta.env.VITE_BASE_API_URL}/tables/:tableId`,
    ({ params }) => {
      const tableId = params.tableId;

      return HttpResponse.json([{ name: tableId }]);
    }
  ),

  http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, ({ request }) => {
    const url = new URL(request.url);
    const activeGame = url.searchParams.get("active_game");

    return HttpResponse.json([{ name: "skol", active_game: activeGame }]);
  }),

  // Network Errors
  // Failed Requests x Request with errors

  // Failed Request
  // When something gets wrong when connecting the Front with Back
  // http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, () => {
  //   return HttpResponse.error();
  // }),

  // Request with errors
  // The request per se is succefful, but something gets wrong when connection to a databse, maybe
  // the request need some information and the front end missed that info
  // http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, () => {
  //   return HttpResponse.json("you are not authorized", { status: 401 });
  // }),

  http.get(`${import.meta.env.VITE_BASE_API_URL}/games`, async () => {
    const fakeGames = [{ name: "Jumanji" }];

    return HttpResponse.json(fakeGames);
  }),
];
