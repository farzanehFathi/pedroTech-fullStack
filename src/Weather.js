import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="please enter a city .."
          autoComplete="off"
        />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <div>
        <h1>Tehran</h1>
        <ul>
          <li>Sunday, 14:04</li>
          <li>Clear Sky</li>
        </ul>
      </div>
      <div>
        <div>Icon</div> <div>38</div> <div>°C</div>
      </div>
      <div>
        <ul>
          <li>Humidiy: 45%</li> <li>Wind: 5 km/h</li>
        </ul>
      </div>
    </div>
  );
}
