import React from 'react';

const SearchInput = ({ handleChange, searchVal, theme }) => (
  <div>
    <form  className="search-box">
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

export default SearchInput