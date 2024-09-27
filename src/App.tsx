import React, {  useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ModuleList from './components/ModuleList';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [sortByStars, setSortByStars] = useState<boolean>(false);
 

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col w-full">
          <SearchBar onSearch={setQuery} />
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSortByStars(!sortByStars)}
              className="bg-gray-500 text-white px-4 py-2"
            >
              Sort by Stars
            </button>
          </div>
          <ModuleList query={query} sortByStars={sortByStars} />
        </div>
      </div>
    </div>
  );
};

export default App;
