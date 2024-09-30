import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from '../../src/components/SearchBar';
import React from 'react';

describe('SearchBar Component', () => {
  it('renders input field', () => {
    render(<SearchBar onSearch={vi.fn()} />);
    const input = screen.getByPlaceholderText('Search for modules');
    expect(input).toBeInTheDocument();
  });

  it('calls onSearch after a delay when input value changes', async () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('Search for modules');

    // Type a query into the input field
    fireEvent.change(input, { target: { value: 'React' } });

    // Wait for the debounce time (1000ms) and check if onSearch was called
    await waitFor(() => expect(handleSearch).toHaveBeenCalledWith('React'), {
      timeout: 1100, // Use a slightly longer timeout than the debounce to ensure the function has time to be called
    });

    // Check if onSearch was called only once
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('does not call onSearch if input is cleared', async () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('Search for modules');

    // Type a query into the input field
    fireEvent.change(input, { target: { value: 'React' } });

    // Clear the input field
    fireEvent.change(input, { target: { value: '' } });

    // Wait for debounce time
    await waitFor(() => expect(handleSearch).not.toHaveBeenCalled(), {
      timeout: 1100, // Ensure no call happens after input is cleared
    });
  });
});
