import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("Should render with text having the name prop in it if name is provied", () => {
    // automatically renders into a virtual dom implemented by jsdom
    render(<Greet name="Jake" />);

    // with screen we can then access what is rendered
    // screen.debug(); //Displays our virtual dom on UI

    // find header in dom and make sure it is presnt
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello/i);
  });

  it("Should display button if name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/\S+/);
  });
});
