import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>BlogDetails</div>);
  const element = screen.getByText(/BlogDetails/i);
  expect(element).toBeInTheDocument();
});
