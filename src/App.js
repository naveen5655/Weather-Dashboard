import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import WeatherMoodTracker from './components/WeatherMoodTracker';
import MultiLocationChecker from './components/MultiLocationChecker';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/css/App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Hyderabad');
  const [inputLocation, setInputLocation] = useState('');
  const [location1, setLocation1] = useState('');
  const [location2, setLocation2] = useState('');
  const [weather1, setWeather1] = useState(null);
  const [weather2, setWeather2] = useState(null);


  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const fetchWeatherData = async (loc) => {
    try {
      const response = await axios.get(`https://wttr.in/${loc}?format=%t+%c`);
      setWeatherData({ temp: response.data, location: loc });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    if (inputLocation.trim()) {
      fetchWeatherData(inputLocation);
      setLocation(inputLocation); 
    }
  };

  const fetchWeatherForLocations = async () => {
    try {
      const response1 = await axios.get(`https://wttr.in/${location1}?format=%t+%c`);
      setWeather1(response1.data);
      const response2 = await axios.get(`https://wttr.in/${location2}?format=%t+%c`);
      setWeather2(response2.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="search-bar-container">
          <SearchBar
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            onSearch={handleSearch}
          />
          <WeatherCard data={weatherData} />
        </div>
        <div className="multi-location-container">
          <MultiLocationChecker
            location1={location1}
            location2={location2}
            setLocation1={setLocation1}
            setLocation2={setLocation2}
            onCheckWeather={fetchWeatherForLocations}
            weather1={weather1}
            weather2={weather2}
          />
        </div>
        <div className="weather-mood-container">
          <WeatherMoodTracker />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
