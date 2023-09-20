import React, { createContext, useContext } from "react";
import { WeatherContext } from "./WeatherContextComponent";

export const TimeContext = createContext(null);
export const TimeContextComponent = ({ children }) => {
  const { data } = useContext(WeatherContext);

  // Time with timezone
  const newdate = new Date();
  const timezoneOffsetSeconds = data[0]?.timezone;
  const date = new Date(
    newdate?.getTime() + timezoneOffsetSeconds * 1000 - 7200 * 1000
  );

  // Timestamp
  const realTimestamp = Math.floor(newdate.getTime() / 1000);

  const value = { date, realTimestamp };

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
