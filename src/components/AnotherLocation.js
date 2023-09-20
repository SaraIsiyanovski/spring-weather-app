import React, { useContext, useState } from "react";
import { CityContext } from "../context/CityContextComponent";
import { WeatherContext } from "../context/WeatherContextComponent";
import { BsSearch } from "react-icons/bs";
import { SearchCity } from "./SearchCity";

export const AnotherLocation = () => {
  const { allCities } = useContext(CityContext);
  const { city, setCity, setFirstTemp, setUnit } = useContext(WeatherContext);
  const [state, setState] = useState(false);

  const handleClick = (x) => {
    setCity(x);
    setUnit("°C");
    setFirstTemp();
  };

  return (
    <div className="another">
      {state && <SearchCity setState={setState} />}
      <div className="heading another-h">
        ANOTHER LOCATION{" "}
        <span className="icon" onClick={() => setState(true)}>
          <BsSearch />
        </span>
      </div>
      <div className="info-we pointer">
        <p onClick={() => handleClick("Bitola")}>Bitola</p>
        <p onClick={() => handleClick("Skopje")}>Skopje</p>
        <p onClick={() => handleClick("London")}>London</p>
        <p onClick={() => handleClick("New York")}>New York</p>
        <p onClick={() => handleClick("Barcelona")}>Barcelona</p>
      </div>
    </div>
  );
};
