import { HttpResponse, http, delay } from "msw";

export const authHandlers = [
  http.get(`${import.meta.env.VITE_ONE_WORD_API}/user`, async () => {
    const fakeUser = { name: "mario" };

    await delay("real");

    return HttpResponse.json(fakeUser);
  }),
];
