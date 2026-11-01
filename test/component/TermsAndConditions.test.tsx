import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("Should display correct page title", () => {
    render(<TermsAndConditions />);
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Terms & Conditions/i);
  });

  //   now we can still have this testcase inside the first one and update the expectation title but I went this way
  it("Should have an unchecked input initially as well as a disabled button", () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    //expect(button).toHaveTextContent(/Submit/i); //this is not so needed. The text can change in future but we want to make sure we have the needed behaviour
    expect(button).toBeDisabled();
  });

  it("Button should be enabled when checkbox is checked.", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
