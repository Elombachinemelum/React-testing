import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  // test that button shows when isAdmin is true
  // Test that button does not show when isAdmin is fals
  // test that user name shows up in the div

  it("Should display edit button when admin user is passed", () => {
    render(
      <UserAccount
        user={{
          id: 2,
          name: "Jane Doe",
          isAdmin: true,
        }}
      />,
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should not show edit button if isAdmin is false", () => {
    render(
      <UserAccount
        user={{
          id: 3,
          name: "Jamal",
          isAdmin: false,
        }}
      />,
    );
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("User name should show in Dom if user is passed", () => {
    const { container, debug } = render(
      <UserAccount
        user={{
          id: 3,
          name: "Jamal",
          isAdmin: false,
        }}
      />,
    );
    const div = container.querySelector("div");
    expect(div).toHaveTextContent("Jamal");
    debug();
  });
});
