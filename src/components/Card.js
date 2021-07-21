  
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({flag, name, population, region, capital, theme, alpha3Code}) => (
  <Link to={`/alpha/${alpha3Code}`}>
    <div className={`card h-100 ${theme === 'light' ? 'lightTheme' : 'darkTheme component'}`}>
      <img src={flag} className="card-img" alt={name}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  </Link>
)

export default Card