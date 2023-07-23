import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input
          type="search"
          placeholder="please enter a city .."
          autoComplete="off"
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
