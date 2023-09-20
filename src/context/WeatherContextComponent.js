import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext(null);

export const WeatherContextComponent = ({ children }) => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("New York");
  const [image, setImage] = useState();

  // Get weather data
  const APIkey = "c4f57e3e3fa49eddefadee4836c13357";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

  useEffect(() => {
    const promise = async () => {
      try {
        const axios1 = await axios.get(url);

        return setData([axios1.data]);
      } catch (error) {
        alert(error);
      }
    };
    promise();
  }, [url]);

  const value = { data, city, setCity, image, setImage };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
