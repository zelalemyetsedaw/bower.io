import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Sidebar from '../../src/components/Sidebar';
import React from 'react';

describe('Sidebar Component', () => {
  it('renders the sidebar in the closed state by default', () => {
    render(<Sidebar />);

    // Check if the sidebar is hidden by default
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  it('opens the sidebar when the menu button is clicked', () => {
    render(<Sidebar />);

    const menuIcon = screen.getByRole('button');
    
    // Click on the menu button to open the sidebar
    fireEvent.click(menuIcon);

    // Sidebar should be visible
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('translate-x-0');
  });

  it('closes the sidebar when clicking outside the sidebar', () => {
    render(<Sidebar />);

    // Open the sidebar
    const menuIcon = screen.getByRole('button');
    fireEvent.click(menuIcon);

    // Sidebar should now be visible
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('translate-x-0');

    // Simulate clicking outside the sidebar (on the overlay)
    const overlay = screen.getByTestId('overlay');
    fireEvent.click(overlay);

    // Sidebar should be hidden again
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  it('renders all the sidebar menu items', () => {
    render(<Sidebar />);

    // Check if all sidebar items are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Creating Packages')).toBeInTheDocument();
    expect(screen.getByText('API')).toBeInTheDocument();
    expect(screen.getByText('Configuration')).toBeInTheDocument();
    expect(screen.getByText('Pluggable Resolvers')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
