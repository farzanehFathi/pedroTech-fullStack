import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

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

  function search() {
    const apiKey = "32e12816b7e874a17bd13105b642a985";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {" "}
        <form className="row gx-0 mb-3" onSubmit={handleSubmit}>
          <div className="row gx-0">
            <div className="col-9">
              <input
                onChange={handleSearch}
                className="form-control h-100 w-75"
                type="search"
                placeholder="please enter a city .."
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading ...";
  }
}
