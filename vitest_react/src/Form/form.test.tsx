import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from "./Form";

describe("formComponent()", () => {
  it("should take input correct way", async () => {
    const submitFn = vi.fn();
    render(<FormComponent onSubmit={submitFn} />);
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");
    await user.type(input, "hello world");
    const heading = screen.getByRole("heading", {
      level: 2,
    });
    const submitBtn = screen.getByRole("button", {
      name: "Submit",
    });
    await user.click(submitBtn);
    expect(heading).toHaveTextContent("hello world");
    expect(submitFn).toHaveBeenCalledWith("hello world");
  });
});
