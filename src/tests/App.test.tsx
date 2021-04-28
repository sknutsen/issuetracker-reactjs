import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Login link in nav', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
