import { render, screen } from "@testing-library/react";
import { SimpleComponent } from "./simple-component";

describe("SimpleComponent", () => {
  it("renders the component", () => {
    render(<SimpleComponent />);
    const componentElement = screen.getByText("SimpleComponent");

    expect(componentElement).toBeInTheDocument();
  });
});
