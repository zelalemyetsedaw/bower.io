import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Social icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Bower Search</h3>
            <p className="text-gray-400">
              Bower Search is a powerful search engine for finding open-source packages. Powered by libraries.io, it allows users to search and sort packages by relevance or stars.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-gray-400 hover:text-white">Docs</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white">Search Packages</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#stats" className="text-gray-400 hover:text-white">Stats</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        {/* Copyright */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Bower Search. All Rights Reserved.</p>
          <p className="text-gray-400 text-sm">Powered by <a href="https://libraries.io" className="hover:text-white">libraries.io</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
