import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testing HomePage Component", () => {
  test('Check search field', () => {
    render(<App />);

    const linkElement = screen.getByRole('button', {name:/search/ });

    console.log(linkElement)
    expect(linkElement).toBeInTheDocument();
  });
})

