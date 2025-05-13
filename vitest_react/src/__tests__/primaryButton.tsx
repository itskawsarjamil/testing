import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/primaryButton";

describe("primaryButton()", () => {
  it("should render correctly with the action add", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("click to add");
    expect(element).toBeInTheDocument();
  });
  it("should render correctly with the action post", () => {
    render(<PrimaryButton action="post" />);
    const element = screen.getByText("click to post");
    expect(element).toBeInTheDocument();
  });
});
