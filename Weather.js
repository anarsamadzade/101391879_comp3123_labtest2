import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const API_KEY = '6f41e5b143bdf5f6626174ae1863d601';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
        try {
            const response = await axios.get(URL);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Unable to fetch weather data. Please try again.');
        }
    };
    

    return (
        <div>
            <h2>Weather App</h2>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h3>{weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
