import React from "react";
import { render, screen } from "@testing-library/react";

test("renders a simple component", () => {
  render(<div>Profile</div>);
  const element = screen.getByText(/Profile/i);
  expect(element).toBeInTheDocument();
});
