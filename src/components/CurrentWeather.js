import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from "../context/TimeContextComponent";
import { WeatherContext } from "../context/WeatherContextComponent";

export const CurrentWeather = () => {
  const { data } = useContext(WeatherContext);
  const { date } = useContext(TimeContext);
  let temp = `${data[0]?.main.temp.toFixed(0)}°C`;
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  console.log(data);

  useEffect(() => {
    switch (date.getDay()) {
      case 0:
        setDay("Sunday");
        break;
      case 1:
        setDay("Monday");
        break;
      case 2:
        setDay("Tuesday");
        break;
      case 3:
        setDay("Wednesday");
        break;
      case 4:
        setDay("Thursday");
        break;
      case 5:
        setDay("Friday");
        break;
      case 6:
        setDay("Saturday");
    }
  }, [date]);

  useEffect(() => {
    switch (date.getMonth()) {
      case 0:
        setMonth("Jan");
        break;
      case 1:
        setMonth("Feb");
        break;
      case 2:
        setMonth("Mar");
        break;
      case 3:
        setMonth("Apr");
        break;
      case 4:
        setMonth("May");
        break;
      case 5:
        setMonth("June");
        break;
      case 6:
        setMonth("July");
        break;
      case 7:
        setMonth("Aug");
        break;
      case 8:
        setMonth("Sept");
        break;
      case 9:
        setMonth("Oct");
        break;

      case 10:
        setMonth("Nov");
        break;
      case 11:
        setMonth("Dec");
        break;
    }
  }, [date]);

  return (
    <div className="current">
      <div className="bold temp">{temp}</div>
      <div className="middle">
        <p className="city">
          {data[0]?.name}, {data[0]?.sys.country}
        </p>
        <div className="time">
          <p>
            <span>
              {date.getHours()}:{date.getMinutes()}-
            </span>
          </p>
          <p>
            <span>{day}, </span>
            <span>{date.getDate()} </span>
            <span>{month} </span>
            <span>{date.getFullYear() - 2000}</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
