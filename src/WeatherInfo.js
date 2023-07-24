import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <div className="mb-3">
        <h1>{data.cityName}</h1>
        <ul>
          <li>
            <FormattedTime time={data.time} />
          </li>
          <li className="text-capitalize">{data.description}</li>
        </ul>
      </div>
      <div className="row gx-0">
        <ul className="col-6 weather-summary">
          <li className="icon" id="Icon">
            <WeatherIcon iconCode={data.iconCode} />
          </li>
          <li className="temp">{data.temp}</li>
          <li className="unit">°C</li>
        </ul>
        <ul className="col-6">
          <li>Humidiy: {data.humidity}%</li>
          <li>Wind: {data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
