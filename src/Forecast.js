import React, { useState } from "react";
import ForecastData from "./ForecastData";

export default function Forecast(props) {
  return (
    <div className="row mt-5">
      <div className="col">
        <ForecastData city={props.city} day={0} />
      </div>
      <div className="col">
        <ForecastData city={props.city} day={1} />
      </div>
      <div className="col">
        <ForecastData city={props.city} day={2} />
      </div>
      <div className="col">
        <ForecastData city={props.city} day={3} />
      </div>
      <div className="col">
        <ForecastData city={props.city} day={4} />
      </div>
    </div>
  );
}
