import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

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
        <div className="col-6 weather-summary">
          <div className="icon">
            <WeatherIcon iconCode={data.iconCode} />
          </div>
          <UnitConversion temperature={data.temp} />
        </div>

        <ul className="col-6">
          <li>Humidiy: {data.humidity}%</li>
          <li>Wind: {data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
