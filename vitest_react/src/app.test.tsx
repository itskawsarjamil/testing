import App from "./App";
import { render, screen } from "@testing-library/react";
// import { test, expect } from "vitest";

it("should render hello world correctly", () => {
  render(<App />);
  const element = screen.getByText("hello world");
  expect(element).toBeInTheDocument();
});
