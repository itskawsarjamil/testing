import { logRoles, render, screen, within } from "@testing-library/react";
import UserTable from "./UsersTable";
import { users } from "../App";

describe("usersTable()", () => {
  it("should render the welcome message correctly", async () => {
    render(<UserTable users={users} />);

    // screen.logTestingPlaygroundURL();
    //   screen.debug()
    const welcomeMessageEl = await screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    ); //in default wait for max 1sec or 1000ms
    expect(welcomeMessageEl).toBeInTheDocument();
  });
  it("should render the table correctly", () => {
    const { container } = render(<UserTable users={users} />);

    logRoles(container);

    // screen.logTestingPlaygroundURL();
    //   screen.debug()

    //getting all rows:
    // const rows = screen.getAllByRole("row");

    // getting specific rows:
    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(3);
  });
});
