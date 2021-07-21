import React from 'react';

const SelectRegion = ({ handleChange, theme }) => {
  const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]

  return (
    <div  className="select-box">
      <select 
        className={`form-control ${theme === 'dark' && 'darkInput'}`}
        onChange={handleChange}
        name="regions"
      >
        <option value=''>All</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectRegion;