import React from 'react';

const CountryList = ({ countries, onShowDetails }) => (
  <ul>
    {countries.map(country => (
      <li key={country.cca3}>
        {country.name.common}
        <button onClick={() => onShowDetails(country)}>Show</button>
      </li>
    ))}
  </ul>
);

export default CountryList;
