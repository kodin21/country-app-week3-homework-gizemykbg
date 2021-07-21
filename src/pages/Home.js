
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import InputSearch from '../components/SearchInput';
import SelectSearch from '../components/SelectRegion';
import Istatistik from '../components/Istatistik';
import Nav from '../components/Nav';

const Home = ({ theme, countries }) => {
  const [searchVal, setSearchVal] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [selectVal, setSelectVal] = useState('')

  const handleChange = (e) => 
    e.target.name === 'search'
    ? setSearchVal(e.target.value)
    : setSelectVal(e.target.value)
  
  useEffect(() => {
    const inputResults = Object.values(countries).map(country => 
      country.filter(c => c.name.includes(searchVal.charAt(0).toUpperCase() + searchVal.substring(1)))
    ); 

    setSearchResults(inputResults)
  }, [searchVal, countries])

  useEffect(() => {
    const selectResults = Object.values(countries).map(country => 
      country.filter(c => c.region.includes(selectVal))
    );
    
    setSearchResults(selectResults)
  }, [selectVal, countries])

  return (
    <main className="container-fluid mt-5 pt-5">

      <div>
        <InputSearch handleChange={handleChange} searchVal={searchVal} theme={theme}/>
        <SelectSearch handleChange={handleChange} theme={theme} />
       <Nav />
      </div>

      {countries ? (
        <div className="row row-cols-1 row-cols-md-4">
          {searchResults.length ? (
            Object.values(searchResults).map(country => 
              country.map((c, i) => 
                <div className="col mb-4 mt-4" key={i} >
                  <Card theme={theme} {...c} />
                </div>
              ))
          ) : (
            Object.values(countries).map(country => 
            country.map((c, i) => 
              <div className="col mb-4 mt-4" key={i} >
                <Card theme={theme} {...c} />
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="row">
          <p>Sorry!</p>
        </div>
      )}
    </main>
  )
}

export default Home;