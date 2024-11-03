import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (country.capital) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}&units=metric`)
        .then(response => {
          setWeather(response.data);
          setError(null);
        })
        .catch(error => {
          setError('Unable to fetch weather data.');
          setWeather(null);
        });
    }
  }, [country, apiKey]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area} km²</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: '150px' }} />

      {weather ? (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        error && <p>{error}</p>
      )}
    </div>
  );
};

export default CountryDetails;
