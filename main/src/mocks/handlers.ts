import { http, HttpResponse } from "msw";

export const handlers = [
  // http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, () => {
  //   return HttpResponse.json([{ name: "Skol" }]);
  // }),

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
];
