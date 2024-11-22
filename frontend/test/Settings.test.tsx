import React from "react";
import { render, screen } from "@testing-library/react";

test("renders a simple component", () => {
  render(<div>Settings</div>);
  const element = screen.getByText(/Settings/i);
  expect(element).toBeInTheDocument();
});
