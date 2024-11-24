import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>Register</div>);
  const element = screen.getByText(/Register/i);
  expect(element).toBeInTheDocument();
});
