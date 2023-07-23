import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather({ city }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleUrl(event) {
    const dataSource = event.data;
    console.log(event.data);
    setWeatherData({
      ready: true,
      temp: Math.round(dataSource.main.temp),
      humidity: Math.round(dataSource.main.humidity),
      wind: Math.round(dataSource.wind.speed),
      cityName: dataSource.name,
      description: dataSource.weather[0].description,
      iconCode: dataSource.weather[0].icon,
      time: new Date(dataSource.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return <WeatherInfo data={weatherData} />;
  } else {
    const apiKey = "32e12816b7e874a17bd13105b642a985";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleUrl);

    return "loading ...";
  }
}
