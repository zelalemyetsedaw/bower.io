import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import a menu icon from react-icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:w-1/3 '>
      {/* Menu icon for mobile/tablet */}
      <button 
        className="md:hidden pl-2  pt-6  focus:outline-none" 
        onClick={toggleSidebar}
      >
        <FaBars size={24} className="text-blue-500" />
      </button>

      {/* Sidebar */}
      <aside
        data-testid="sidebar" // Added test ID for the sidebar
        className={`fixed top-64 left-0 h-full w-64 bg-gray-200 p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:w-full md:flex md:justify-end md:p-4`}
      >
        <ul className="text-blue-400 font-bold text-left flex flex-col gap-y-3">
          <li> Home </li>
          <li> Creating Packages </li>
          <li> API </li>
          <li> Configuration </li>
          <li> Pluggable Resolvers </li>
          <li> Tools </li>
          <li> About </li>
        </ul>
      </aside>

      {/* Overlay for mobile when the sidebar is open */}
      {isOpen && (
        <div
          data-testid="overlay" // Added test ID for the overlay
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
