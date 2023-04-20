import React from 'react';
import './Search.css';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="Search">
      <label>Search/Filter Results:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      ></input>
    </div>
  );
}

export default Search;
