import React, { useContext, useState } from "react";
import { CityContext } from "../context/CityContextComponent";
import { WeatherContext } from "../context/WeatherContextComponent";
import { BsSearch } from "react-icons/bs";
import { SearchCity } from "./SearchCity";

export const AnotherLocation = () => {
  const { allCities } = useContext(CityContext);
  const { city, setCity } = useContext(WeatherContext);
  const [state, setState] = useState(false);

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
        <p onClick={() => setCity("Bitola")}>Bitola</p>
        <p onClick={() => setCity("Skopje")}>Skopje</p>
        <p onClick={() => setCity("London")}>London</p>
        <p onClick={() => setCity("New York")}>New York</p>
        <p onClick={() => setCity("Barcelona")}>Barcelona</p>
      </div>
    </div>
  );
};
