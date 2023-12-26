import { http, HttpResponse } from "msw";
import { createTableFixture } from "./fixtures";
import { mockOneWordApi } from "../../../mocks/helpers";

export const scenarios = {
  happyPath: [
    http.get(mockOneWordApi("/tables"), async () => {
      const table = createTableFixture(); // Fixing the missing 'table' argument

      return HttpResponse.json([table]);
    }),

    http.get(mockOneWordApi("/tables/:tableId"), ({ params }) => {
      const tableId = params.tableId as string;
      const table = createTableFixture({ table: { name: tableId } });

      return HttpResponse.json([table]);
    }),

    http.get(mockOneWordApi("/tables"), ({ request }) => {
      const url = new URL(request.url);
      const name = url.searchParams.get("name") as string;
      const table = createTableFixture({ table: { name } });

      return HttpResponse.json([table]);
    }),
  ],
};
