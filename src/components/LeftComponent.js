import React, { useContext, useEffect } from "react";
import { CurrentWeather } from "./CurrentWeather";
import clearday from "../img/clearday.webp";
import { WeatherContext } from "../context/WeatherContextComponent";

export const LeftComponent = () => {
  return (
    <div className="left">
      <CurrentWeather />
    </div>
  );
};
