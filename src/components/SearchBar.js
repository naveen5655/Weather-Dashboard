import React from 'react';
import './css/SearchBar.css';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Enter location" 
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
