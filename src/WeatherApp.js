import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import TimeAndDate from "./TimeAndDate";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
    <form onSubmit={handleSubmit} className="input-group search-form mb-4">
      <input
        type="text"
        className="form-control input search-form"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input
        type="submit"
        value="Search"
        className="input-group-text search search-form"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="row mx-3">
          <div className="col-md-8">
            <h2>
              <strong>{weather.city}</strong>
            </h2>
            <TimeAndDate />
            <div className="row">
              <div className="col-sm-3">
                <p className="temperature">
                  {Math.round(weather.temperature)}
                  <span className="temp-unit">°C</span>
                </p>
              </div>
              <div className="col-sm-9">
                <p className="weather-data">Wind speed: {weather.wind}km/h</p>
                <p className="weather-data">Humdity: {weather.humidity}%</p>
                <p className="weather-data">
                  Description: {weather.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <WeatherIcon iconCode={weather.icon} />
          </div>
        </div>
        <div className="row">
          <Forecast city={weather.city} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}

export default WeatherApp;
