import React from 'react';

const SearchInput = ({ handleChange, searchVal, theme }) => (
  <div className="searchBox">
    <form>
      <input 
        name="search"
        type="text"
        className={`form-control ${theme === 'dark' && 'darkInput'}`}
        onChange={handleChange}
        value={searchVal}
        placeholder="Search.."
      />
    </form>
  </div>
);

export default SearchInput;