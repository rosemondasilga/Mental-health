import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>Dashboard</div>);
  const element = screen.getByText(/Dashboard/i);
  expect(element).toBeInTheDocument();
});
