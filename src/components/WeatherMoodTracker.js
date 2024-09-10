import React, { useState } from 'react';
import './css/WeatherMoodTracker.css';

const WeatherMoodTracker = () => {
  const [mood, setMood] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  return (
    <div className="weather-mood-tracker">
      <h3>How does the weather make you feel?</h3>
      <input
        type="text"
        placeholder="Enter your mood"
        value={mood}
        onChange={handleMoodChange}
      />
      <p>Your mood: {mood}</p>
    </div>
  );
};

export default WeatherMoodTracker;
