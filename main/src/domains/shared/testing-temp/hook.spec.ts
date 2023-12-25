import { renderHook } from "@testing-library/react";
import { useCustomHook } from "./hook";

describe("useCustomHook", () => {
  it("should return the correct values", () => {
    const { result } = renderHook(() => useCustomHook());
    const { items } = result.current;

    expect(items).toEqual(["hello"]);
  });
});
