import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(inputValue);
    }, 1000); 

    return () => clearTimeout(timeoutId);
  }, [inputValue, onSearch]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for modules"
        className="p-2 border"
      />
    </div>
  );
};

export default SearchBar;
