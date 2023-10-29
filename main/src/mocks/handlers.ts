import { http } from "msw";
export const handlers = [
  http.get(`${import.meta.env.VITE_BASE_API_URL}/tables`, () => {
    return new Response(JSON.stringify([{ name: "Skol" }]), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
];
