import React from "react";

export default function FormattedTime({ time }) {
  const daysList = {
    0: "sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    1: "Saturday",
  };

  const day = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `Last updated on ${daysList[day]}, ${hour}:${minute}`;
}
