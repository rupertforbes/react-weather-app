import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

export default function ForecastData(props) {
  let addedDays = props.day + 1;
  let [forecastData, setForecastData] = useState(null);
  let day = props.day;
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setLoaded(true);
    console.log(response);
    setForecastData({
      temp: response.data.daily[day].temperature.day,
      icon: response.data.daily[day].condition.icon,
    });
  }

  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=b5a70e3dbaf3379o5576fffe161ca0t4`;
  axios.get(url).then(handleResponse);

  if (loaded) {
    return (
      <div>
        <p className="text-center">
          {moment().add(addedDays, "days").format("ddd")}
        </p>
        <p className="text-center">{forecastData.temp}</p>
      </div>
    );
  }
  setLoaded(false);
}
