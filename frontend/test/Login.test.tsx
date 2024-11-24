import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>Login</div>);
  const element = screen.getByText(/Login/i);
  expect(element).toBeInTheDocument();
});
