import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>ForgotPassword</div>);
  const element = screen.getByText(/ForgotPassword/i);
  expect(element).toBeInTheDocument();
});
