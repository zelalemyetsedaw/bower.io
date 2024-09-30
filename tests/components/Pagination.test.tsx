import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from '../../src/components/Pagination';
import React from 'react';

describe('Pagination Component', () => {
  it('renders the correct number of pages', () => {
    render(<Pagination totalPages={5} setPage={vi.fn()} currentPage={1} />);
    
    const buttons = screen.getAllByRole('button'); // Get all buttons
    expect(buttons.length).toBe(5); // Check that 5 buttons are rendered
  });

  it('highlights the current page', () => {
    render(<Pagination totalPages={5} setPage={vi.fn()} currentPage={3} />);
    
    const currentPageButton = screen.getByText('3'); // Get the button for the current page
    expect(currentPageButton).toHaveClass('bg-gray-800 text-white'); // Check that the current page button has the correct styles
  });

  it('calls setPage when a page button is clicked', () => {
    const setPageMock = vi.fn();
    render(<Pagination totalPages={5} setPage={setPageMock} currentPage={1} />);

    const buttonToClick = screen.getByText('2'); // Get the button for page 2
    fireEvent.click(buttonToClick); // Simulate a click on page 2

    expect(setPageMock).toHaveBeenCalledWith(2); // Check if setPage was called with page 2
  });
});
