import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../src/components/Footer';
import React from 'react';

describe('Footer Component', () => {
  it('renders the About section', () => {
    render(<Footer />);

    // Check if the About section is present
    const aboutTitle = screen.getByText('About Bower Search');
    expect(aboutTitle).toBeInTheDocument();

    const aboutText = screen.getByText(/Bower Search is a powerful search engine for finding open-source packages/i);
    expect(aboutText).toBeInTheDocument();
  });

  it('renders Quick Links section', () => {
    render(<Footer />);

    // Check if all Quick Links are rendered
    const docsLink = screen.getByText('Docs');
    const searchPackagesLink = screen.getByText('Search Packages');
    const blogLink = screen.getByText('Blog');
    const statsLink = screen.getByText('Stats');

    expect(docsLink).toBeInTheDocument();
    expect(searchPackagesLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(statsLink).toBeInTheDocument();
  });

  

  it('renders copyright information', () => {
    render(<Footer />);

    // Check if the copyright information is rendered
    const copyrightText = screen.getByText(/Bower Search. All Rights Reserved/i);
    const librariesLink = screen.getByText('libraries.io');

    expect(copyrightText).toBeInTheDocument();
    expect(librariesLink).toBeInTheDocument();
  });
});
