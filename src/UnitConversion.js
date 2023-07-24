import React, { useState } from "react";

export default function UnitConversion({ temperature }) {
  const [temp, setTemp] = useState(temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemp(Math.round((temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemp(temperature);
  }

  if (temp === temperature) {
    return (
      <div className="UnitConversion">
        <div className="temp">{temp}</div>
        <div className="unit">
          °C |{" "}
          <a href="." onClick={showFahrenheit}>
            °F{" "}
          </a>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <div className="temp">{temp}</div>
        <div className="unit">
          <a href="." onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F{" "}
        </div>
      </div>
    );
  }
}
