import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable Text", () => {
  it("It should display text and not added content when input text is at limit or less", () => {
    const text = "Simple testing text";
    render(<ExpandableText text={text} />);

    const ariticle = screen.getByRole("article");
    expect(ariticle).toBeInTheDocument();
    expect(ariticle).toHaveTextContent(text);

    const buttton = screen.queryByRole("button");
    expect(buttton).not.toBeInTheDocument();
  });

  it("Should display truncated text if large input text is provided", async () => {
    const text = "a".repeat(400);
    render(<ExpandableText text={text} />);

    const article = screen.getAllByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).not.toHaveTextContent(text);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // verify that button click works well and full text is displayed.
    const user = userEvent.setup();
    await user.click(button);
    // expect(screen.getByText(text)).toBeInTheDocument(); //this should get the article by text content and work still
    expect(article).toHaveTextContent(text);
  });
});
