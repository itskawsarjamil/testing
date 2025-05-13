import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import UserEvent from "./UserEvent";
describe("UserEvent()", () => {
  it("renders a counter with initial value of 0", () => {
    render(<UserEvent />);
    const heading = screen.getByRole("heading", {
      level: 3,
    });
    expect(heading).toBeInTheDocument();
  });
  it("should increase the love count upon clicking on increase button", async () => {
    render(<UserEvent />);
    const user = userEvent.setup();
    const button = screen.getByText("Make her love you more!");
    await user.click(button);
    const heading = screen.getByRole("heading", {
      level: 3,
    });
    expect(heading).toHaveTextContent("Your girlfriend loves you 1 times!");
  });
});
