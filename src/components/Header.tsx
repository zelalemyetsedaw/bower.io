import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 flex flex-col lg:flex-row justify-between items-center h-auto lg:h-56 text-white p-6 shadow-lg">
      <div className='lg:flex lg:flex-row flex flex-col items-center lg:pl-64 lg:gap-5 '>
      <div className=" flex  justify-center items-center ">
        <img src="https://bower.io/img/bower-logo.svg" alt="Bower logo" className="w-24 h-24 md:w-40 md:h-40 object-contain" />
      </div>

      <div className="text-center mt-4 md:mt-0">
         
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Bower Search</h1>
        <p className="text-sm md:text-lg text-white opacity-90 mt-2">Powered by libraries.io</p>
      </div>
      </div>
      <div className="mt-4 md:mt-0 lg:pr-20">
        <ul className="flex gap-4 text-sm md:text-lg font-semibold">
          <li className="hover:text-yellow-200 transition duration-300 ease-in-out cursor-pointer">Docs</li>
          <li className="hover:text-yellow-200 transition duration-300 ease-in-out cursor-pointer">Search Packages</li>
          <li className="hover:text-yellow-200 transition duration-300 ease-in-out cursor-pointer">Blog</li>
          <li className="hover:text-yellow-200 transition duration-300 ease-in-out cursor-pointer">Stats</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
