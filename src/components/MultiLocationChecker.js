import React, { useState } from 'react';
import axios from 'axios';
import './css/MultiLocationChecker.css';

const MultiLocationChecker = () => {
  const [location1, setLocation1] = useState('');
  const [location2, setLocation2] = useState('');
  const [weather1, setWeather1] = useState(null);
  const [weather2, setWeather2] = useState(null);

  const fetchWeather = async (loc, setWeather) => {
    try {
      const response = await axios.get(`https://wttr.in/${loc}?format=%t+%c`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleCheckWeather = () => {
    fetchWeather(location1, setWeather1);
    fetchWeather(location2, setWeather2);
  };

  return (
    <div className="multi-location-checker">
      <h3>Compare Weather in Two Locations</h3>
      <input
        type="text"
        placeholder="First location"
        value={location1}
        onChange={(e) => setLocation1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second location"
        value={location2}
        onChange={(e) => setLocation2(e.target.value)}
      />
      <button onClick={handleCheckWeather}>Check Weather</button>
      <div className="location-weather">
        {weather1 && (
          <div className="weather-info">
            <h4>{location1}</h4>
            <p>Temp: {weather1}</p>
          </div>
        )}
        {weather2 && (
          <div className="weather-info">
            <h4>{location2}</h4>
            <p>Temp: {weather2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiLocationChecker;
