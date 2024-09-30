import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';
import React from 'react';

// Mock components to isolate the App component
vi.mock('./components/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}));

vi.mock('./components/Sidebar', () => ({
  default: () => <div data-testid="sidebar">Sidebar</div>,
}));

vi.mock('./components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe('App Component', () => {
  it('renders Header, Sidebar, and Footer', () => {
    render(<App />);

    // Check if Header, Sidebar, and Footer are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
