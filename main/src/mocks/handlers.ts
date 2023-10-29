import { http, HttpResponse } from "msw";
export const handlers = [
  http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, () => {
    return HttpResponse.json([{ name: "Skol" }]);
  }),
];
