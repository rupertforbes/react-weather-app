import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

function App() {
  let [temp, setTemp] = useState(null);

  function showData(response) {
    setTemp(response.data.main.temp);
    console.log(response);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=1fd8093fa5ff12d796d7de756cc9d6b9`;
  axios.get(url).then(showData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <p>The temperature in London is {Math.round(temp)}°C</p>
        <Weather />
      </header>
    </div>
  );
}

export default App;
