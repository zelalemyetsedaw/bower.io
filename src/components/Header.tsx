import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-500 h-56 text-white p-4">
      <h1 className="text-center text-5xl">Bower Search</h1>
      <p className='text-center'>Powered by libraries.io</p>
    </header>
  );
};

export default Header;
