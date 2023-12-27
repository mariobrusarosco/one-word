import { renderHook } from "@testing-library/react";
import { useCustomHook, useToggle } from "./hook";
import { act } from "react-dom/test-utils";

describe("useToggle", () => {
  it.only("starts with a invisible boolean prop that turns to true after toggle function is called", async () => {
    const { result } = renderHook(() => useToggle());
    const { isVisible } = result.current;

    expect(isVisible).toBe(false);

    // Option 1
    // result.current.toggle();

    // await waitFor(() => expect(result.current.isVisible).toBe(true));

    // Option 2 (it seems a little bit faster)
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
