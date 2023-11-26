import { http, HttpResponse, bypass, delay } from "msw";
import { createTableFixture } from "./fixtures";

export const tablesHandlers = [
  http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, async () => {
    const table = createTableFixture(); // Fixing the missing 'table' argument

    return HttpResponse.json([table]);
  }),

  http.get(
    `${import.meta.env.VITE_BASE_API_URL}/tables/:tableId`,
    ({ params }) => {
      const tableId = params.tableId;
      const table = createTableFixture({ table: { name: tableId } });

      return HttpResponse.json([table]);
    }
  ),

  http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, ({ request }) => {
    const url = new URL(request.url);
    const activeGame = url.searchParams.get("active_game");
    const table = createTableFixture({ active_game: activeGame });

    return HttpResponse.json([table]);
  }),
];
