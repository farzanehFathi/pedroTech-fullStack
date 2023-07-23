import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row gx-0 mb-3">
        <div className="row gx-0">
          <div className="col-9">
            <input
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

      <div className="mb-3">
        <h1>Tehran</h1>
        <ul>
          <li>Sunday, 14:04</li>
          <li>Clear Sky</li>
        </ul>
      </div>
      <div className="row gx-0">
        <ul className="col-6 weather-summary">
          <li className="icon">Icon</li>
          <li className="temp">38</li>
          <li className="unit">°C</li>
        </ul>
        <ul className="col-6">
          <li>Humidiy: 45%</li>
          <li>Wind: 5 km/h</li>
        </ul>
      </div>
    </div>
  );
}
