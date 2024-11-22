import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>Blog</div>);
  const element = screen.getByText(/Blog/i);
  expect(element).toBeInTheDocument();
});
