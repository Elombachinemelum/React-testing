import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("Should display a paragraph saying array is empty", () => {
    render(<UserList users={[]} />);

    const p = screen.getByText(/No users/g);
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent(/No users/g);
  });

  it("Should display hyperlinks with hrefs as well as with user's names", () => {
    const users: User[] = [
      {
        id: 1,
        name: "James",
        isAdmin: false,
      },
      {
        id: 2,
        name: "CJ",
        isAdmin: false,
      },
    ];

    render(<UserList users={users} />);
    users.forEach((user) => {
      const a = screen.getByRole("link", { name: user.name });
      expect(a).toBeInTheDocument();
      expect(a).toHaveTextContent(user.name);
      expect(a).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
