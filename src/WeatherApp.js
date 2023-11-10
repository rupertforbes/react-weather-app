import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  let iconURL = "https://openweathermap.org/img/wn/10d@2x.png";

  function displayWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1fd8093fa5ff12d796d7de756cc9d6b9`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="WeatherApp">
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="WeatherApp">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind speed: {weather.wind}km/h</li>
          <li>Humdity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <img src={weather.icon} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default WeatherApp;
