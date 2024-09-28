import React, {  useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ModuleList from './components/ModuleList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [sortByStars, setSortByStars] = useState<boolean>(false);
 

  return (
    <div className='overflow-x-hidden'>
    <div className=" flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex  flex-col  ">
          <SearchBar onSearch={setQuery} />
          
          <ModuleList query={query} sortByStars={sortByStars} setSortByStars={setSortByStars} />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default App;
