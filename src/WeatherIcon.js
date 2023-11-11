import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";

/*const defaults = [
  {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "01d",
  },
  {
    icon: "CLEAR_NIGHT",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "01n",
  },
  {
    icon: "PARTLY_CLOUDY_DAY",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "02d",
  },
  {
    icon: "PARTLY_CLOUDY_NIGHT",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "02n",
  },
  {
    icon: "CLOUDY",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "04d",
  },
  {
    icon: "RAIN",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "10d",
  },
  {
    icon: "SNOW",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "13d",
  },
  {
    icon: "FOG",
    color: "goldenrod",
    size: 512,
    animate: true,
    iconCode: "50d",
  },
];*/

function WeatherIcon(props) {
  const [defaults, setDefaults] = useState({
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 512,
    animate: true,
  });

  function changeDefaultsState() {
    if (props.iconCode === "01d") {
      setDefaults({
        icon: "CLEAR_DAY",
        color: "goldenrod",
        size: 512,
        animate: true,
        iconCode: "01d",
      });
    } else if (props.iconCode === "01n") {
      setDefaults({
        icon: "CLEAR_NIGHT",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    } else if (props.iconCode === "02d" || props.iconCode === "03d") {
      setDefaults({
        icon: "PARTLY_CLOUDY_DAY",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    } else if (props.iconCode === "02n" || props.iconCode === "03n") {
      setDefaults({
        icon: "PARTLY_CLOUDY_NIGHT",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    } else if (props.iconCode === "04d" || props.iconCode === "04n") {
      setDefaults({
        icon: "CLOUDY",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    } else if (
      props.iconCode === "09d" ||
      props.iconCode === "09n" ||
      props.iconCode === "10d" ||
      props.iconCode === "10n" ||
      props.iconCode === "11d" ||
      props.iconCode === "11n"
    ) {
      setDefaults({
        icon: "RAIN",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    } else if (props.iconCode === "13d" || props.iconCode === "13n") {
      setDefaults({
        icon: "SNOW",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    } else if (props.iconCode === "50d" || props.iconCode === "50n") {
      setDefaults({
        icon: "FOG",
        color: "goldenrod",
        size: 512,
        animate: true,
      });
    }
  }

  changeDefaultsState();

  /*let iconList = {
    clearDay: "01d",        -
    clearNight: "01n",      -
    fewCloudsDay: "02d",    -
    fewCloudsNight: "02n",  -
    scatteredDay: "03d",    
    scatteredNight: "03n",
    brokenDay: "04d",       -
    brokenNight: "04n",
    showerDay: "09d",
    showerNight: "09n",
    rainDay: "10d",         -
    rainNight: "10n",
    thunderDay: "11d",
    thunderNight: "11n",
    snowDay: "13d",         -
    snowNight: "13n",
    mistDay: "50d",         -
    mistNight: "50n",
  };*/

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}

export default WeatherIcon;
