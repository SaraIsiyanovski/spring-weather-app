import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContextComponent";
import {} from "react-icons/ai";
import {
  BsCloudFog,
  BsCloudLightningRain,
  BsCloudMoon,
  BsCloudRain,
  BsCloudRainHeavy,
  BsCloudSnow,
  BsCloudSun,
  BsCloudy,
  BsMoon,
  BsSun,
} from "react-icons/bs";

export const MoreInfo = () => {
  const { data } = useContext(WeatherContext);
  const [icons, setIcons] = useState();

  const iconCode = data[0]?.weather[0].icon;
  console.log(iconCode);

  useEffect(() => {
    switch (iconCode) {
      case "01d":
        setIcons(<BsSun />);
        break;
      case "01n":
        setIcons(<BsMoon />);
        break;
      case "02d":
      case "03d":
        setIcons(<BsCloudSun />);
        break;
      case "02n":
      case "03n":
        setIcons(<BsCloudMoon />);
        break;
      case "04d":
      case "04n":
        setIcons(<BsCloudy />);
        break;
      case "09d":
      case "09n":
        setIcons(<BsCloudRainHeavy />);
        break;
      case "10d":
      case "10n":
        setIcons(<BsCloudRain />);
        break;
      case "11d":
      case "11n":
        setIcons(<BsCloudLightningRain />);
        break;
      case "13d":
      case "13n":
        setIcons(<BsCloudSnow />);
        break;
      case "50d":
      case "50n":
        setIcons(<BsCloudFog />);
        break;
    }
  }, [data]);

  console.log(icons);

  return (
    <div className="info">
      <p className="heading">WEATHER INFO</p>
      <div className="info-we">
        <p>
          <span className="icons-s">{icons}</span>
          <span>{data[0]?.weather[0].description.toUpperCase()}</span>
        </p>
        <p>
          <span>Feels like</span>
          <span>{data[0]?.main.feels_like.toFixed(0)}°C</span>
        </p>
        <p>
          <span>Daily max</span>
          <span>{data[0]?.main.temp_max.toFixed(0)}°C</span>
        </p>
        <p>
          <span>Daily min</span>
          <span>{data[0]?.main.temp_min.toFixed(0)}°C</span>
        </p>
        <p>
          <span>Humidity</span>
          <span>{data[0]?.main.humidity}%</span>
        </p>
        <p>
          <span>Pressure</span>
          <span>{data[0]?.main.pressure}mb</span>
        </p>
        <p>
          <span>Wind</span>
          <span>{data[0]?.wind.speed}km/h</span>
        </p>
      </div>
    </div>
  );
};
