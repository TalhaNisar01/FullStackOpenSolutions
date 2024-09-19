import React from 'react';

const CountryDetails = ({ country }) => {
  const { name, capital, area, languages, flags } = country;

  return (
    <div>
      <h2>{name.common}</h2>
      <img src={flags[0]} alt={`${name.common} flag`} width="150" />
      <p><strong>Capital:</strong> {capital[0]}</p>
      <p><strong>Area:</strong> {area} km²</p>
      <p><strong>Languages:</strong> {Object.values(languages).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
