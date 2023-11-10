import React from "react";
import "./App.css";

function GithubLink() {
  return (
    <p className="WeatherApp">
      <a
        href="https://github.com/rupertforbes/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Rupert Forbes
    </p>
  );
}

export default GithubLink;
