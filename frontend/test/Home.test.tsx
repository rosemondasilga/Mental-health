import React from "react";
import { render, screen } from "@testing-library/react";

test("renders a simple component", () => {
  render(<div>Home</div>);
  const element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();
});
