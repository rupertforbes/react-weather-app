import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function WeatherIcon(props) {
  if (props.iconCode === "01d") {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={200}
        animate={true}
      />
    );
  } else if (props.iconCode === "01n") {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_NIGHT"
        color="black"
        size={200}
        animate={true}
      />
    );
  } else if (props.iconCode === "02d" || props.iconCode === "03d") {
    return (
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="goldenrod"
        size={200}
        animate={true}
      />
    );
  } else if (props.iconCode === "02n" || props.iconCode === "03n") {
    return (
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_NIGHT"
        color="black"
        size={200}
        animate={true}
      />
    );
  } else if (props.iconCode === "04d" || props.iconCode === "04n") {
    return (
      <ReactAnimatedWeather
        icon="CLOUDY"
        color="gray"
        size={200}
        animate={true}
      />
    );
  } else if (
    props.iconCode === "09d" ||
    props.iconCode === "09n" ||
    props.iconCode === "10d" ||
    props.iconCode === "10n" ||
    props.iconCode === "11d" ||
    props.iconCode === "11n"
  ) {
    return (
      <ReactAnimatedWeather
        icon="RAIN"
        color="gray"
        size={200}
        animate={true}
      />
    );
  } else if (props.iconCode === "13d" || props.iconCode === "13n") {
    return (
      <ReactAnimatedWeather
        icon="SNOW"
        color="lightgray"
        size={200}
        animate={true}
      />
    );
  } else if (props.iconCode === "50d" || props.iconCode === "50n") {
    return (
      <ReactAnimatedWeather icon="FOG" color="gray" size={200} animate={true} />
    );
  }
}

export default WeatherIcon;
