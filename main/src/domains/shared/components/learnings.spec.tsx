import { expect, describe, it } from "vitest";
import { Learnings } from "./learnings";

import { render, screen } from "@testing-library/react";

describe("when rendering", () => {
  it("displays user name", async () => {
    render(<Learnings />);

    screen.getByText("Learnings");

    expect(false).toBe(true);
  });
});
