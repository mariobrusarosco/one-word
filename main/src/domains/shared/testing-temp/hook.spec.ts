import { renderHook, waitFor } from "@testing-library/react";
import { useCustomHook, useFetch, useToggle } from "./hook";
import { createReactQueryWrapper } from "../../../testing/utils";
import { server } from "../../../mocks/mocking-on-tests-controller";
import { mockOneWordApi } from "../../../mocks/helpers";
import { HttpResponse, http } from "msw";
import { act } from "react-dom/test-utils";

describe("useToggle", () => {
  it("starts with a invisible boolean prop that turns to true after toggle function is called", async () => {
    const { result } = renderHook(() => useToggle());
    const { isVisible } = result.current;

    expect(isVisible).toBe(false);

    // Option 1
    // result.current.toggle();

    // await waitFor(() => expect(result.current.isVisible).toBe(true));

    // Option 2 (it seems a little b faster)
    act(() => {
      result.current.toggle();
    });

    expect(result.current.isVisible).toBe(true);
  });
});
describe("useCustomHook", () => {
  it("should return the correct values", () => {
    const { result } = renderHook(() => useCustomHook());
    const { items } = result.current;

    expect(items).toEqual(["hello"]);
  });
});

describe("useFetch", () => {
  it("when hooks perfomers a successfull request", async () => {
    const expectedData = ["foo", "bar"];
    server.use(
      ...[
        http.get(mockOneWordApi("/foo-bar"), async () => {
          return HttpResponse.json(expectedData);
        }),
      ]
    );
    const { result } = renderHook(() => useFetch("foo-bar", "fooBar"), {
      wrapper: createReactQueryWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(expectedData);
  });

  it("when hooks perfomers a failed request", async () => {
    const errorMessage = "API ERROR";
    server.use(
      http.get("*", () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: errorMessage,
        });
      })
    );
    const { result } = renderHook(() => useFetch("foo-bar", "fooBar"), {
      wrapper: createReactQueryWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
