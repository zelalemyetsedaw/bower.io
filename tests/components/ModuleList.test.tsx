import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import ModuleList from '../../src/components/ModuleList';
import React from 'react';

vi.mock('axios');

describe('ModuleList Component', () => {
  const mockModules = [
    {
      name: 'Module 1',
      homepage: 'https://example.com',
      description: 'Description for Module 1',
      owner: { login: 'owner1' },
      stars: 10,
      licenses: 'MIT',
      published_at: '2023-01-01',
    },
    {
      name: 'Module 2',
      homepage: 'https://example.com',
      description: 'Description for Module 2',
      owner: { login: 'owner2' },
      stars: 20,
      licenses: 'Apache-2.0',
      published_at: '2023-02-01',
    },
  ];

  

  it('renders error message', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
    render(<ModuleList query="" sortByStars={false} setSortByStars={vi.fn()} />);

    await waitFor(() => expect(screen.getByText('Failed to fetch modules. Please try again.')).toBeInTheDocument());
  });

  it('renders no modules found message', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: [] });
    render(<ModuleList query="" sortByStars={false} setSortByStars={vi.fn()} />);

    await waitFor(() => expect(screen.getByText('No modules found.')).toBeInTheDocument());
  });

  it('renders modules correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockModules });
    render(<ModuleList query="" sortByStars={false} setSortByStars={vi.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('Module 1')).toBeInTheDocument();
      expect(screen.getByText('Module 2')).toBeInTheDocument();
      expect(screen.getByText('Description for Module 1')).toBeInTheDocument();
      expect(screen.getByText('Description for Module 2')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('20')).toBeInTheDocument();
    });
  });

  
});
