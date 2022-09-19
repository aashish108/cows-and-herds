import React from 'react';
import { render, screen } from '@testing-library/react';
import Farm from './Farm';

test('renders learn react link', () => {
  render(<Farm />);
  const text = screen.getByText(/Cows:/i);
  expect(text).toBeInTheDocument();
});
