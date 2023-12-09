import { http, HttpResponse } from "msw";
import { mockOneWordApi } from "../../../mocks/helpers";

export const learningsHandlers = [
  http.get(mockOneWordApi("/learnings"), async () => {
    const user = {
      name: "John Doe",
    };
    return HttpResponse.json(user);
  }),
];
