import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import Message from './Message';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => {
          const filteredCountries = response.data.filter(country =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          );
          setCountries(filteredCountries);
          setError('');
        })
        .catch(error => {
          console.error(error);
          setError('Failed to fetch countries.');
        });
    }
  }, [query]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setSelectedCountry(null); // Reset selected country on new search
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const renderContent = () => {
    if (error) {
      return <Message message={error} />;
    }

    if (countries.length > 10) {
      return <Message message="Too many matches, specify another filter." />;
    }

    if (countries.length > 1) {
      return (
        <CountryList
          countries={countries}
          onCountryClick={handleCountryClick}
        />
      );
    }

    if (countries.length === 1) {
      return <CountryDetails country={countries[0]} />;
    }

    return null;
  };

  return (
    <div>
      <h1>Country Information</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for a country..."
      />
      {renderContent()}
    </div>
  );
};

export default App;
