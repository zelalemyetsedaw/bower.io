import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../../src/components/Header'
import React from 'react';

describe('Header Component', () => {
  it('renders the logo, title, and subtitle', () => {
    render(<Header />);

    // Check for the logo image
    const logo = screen.getByAltText('Bower logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'https://bower.io/img/bower-logo.svg');

    // Check for the title
    const title = screen.getByText('Bower Search');
    expect(title).toBeInTheDocument();

    // Check for the subtitle
    const subtitle = screen.getByText('Powered by libraries.io');
    expect(subtitle).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);

    // Check for navigation links
    const docsLink = screen.getByText('Docs');
    const searchLink = screen.getByText('Search Packages');
    const blogLink = screen.getByText('Blog');
    const statsLink = screen.getByText('Stats');

    expect(docsLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(statsLink).toBeInTheDocument();
  });
});
