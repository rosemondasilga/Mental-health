import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple component', () => {
  render(<div>BookTherapy</div>);
  const element = screen.getByText(/BookTherapy/i);
  expect(element).toBeInTheDocument();
});
