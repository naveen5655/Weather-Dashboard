import React from 'react';
import './css/WeatherCard.css';

const WeatherCard = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="weather-card">
      <p className="weather-temp">Temperature: {data.temp}</p>
      <p className="weather-condition">Location: {data.location}</p>
    </div>
  );
};

export default WeatherCard;
