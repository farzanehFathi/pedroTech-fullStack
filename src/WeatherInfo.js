import React from "react";
import FormattedTime from "./FormattedTime";

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
          <li className="icon">Icon</li>
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
