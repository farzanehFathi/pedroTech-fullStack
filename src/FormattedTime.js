import React from "react";

export default function FormattedTime({ time }) {
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = time.getDay();
  let hour = time.getHours();
  let minute = time.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `Last updated on ${daysList[day]}, ${hour}:${minute}`;
}
