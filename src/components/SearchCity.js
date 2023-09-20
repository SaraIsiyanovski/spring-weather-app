import React, { useContext, useState } from "react";
import { AiOutlineClose, IconName } from "react-icons/ai";
import { CityContext } from "../context/CityContextComponent";
import { WeatherContext } from "../context/WeatherContextComponent";

export const SearchCity = ({ setState }) => {
  const { allCities } = useContext(CityContext);
  const { city, setCity, setFirstTemp, setUnit } = useContext(WeatherContext);
  const [filtered, setFiltered] = useState();
  const [searchInput, setSearchInput] = useState();
  const citiesArr = allCities[0]?.data;

  const cityArr = citiesArr?.map((data) => data.cities);

  const allCitiesArr = cityArr.flat(1);

  const setCities = new Set(allCitiesArr);
  const arrCities = Array.from(setCities);

  const handleClick = (city) => {
    setCity(city);
    setState(false);
    setFirstTemp();
    setUnit("°C");
  };

  const findCity = (e) => {
    setSearchInput(e.target.value);
    const filterCity = arrCities?.filter((city) =>
      city.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filterCity);
  };

  return (
    <div className="darkBack">
      <div className="centered">
        <div className="modal">
          <div className="modal-div">
            <div className="x-div">
              <input
                className="search-i"
                type="search"
                onChange={(e) => findCity(e)}
                placeholder="SEARCH FOR A CITY"
              />
              <AiOutlineClose
                className="close"
                onClick={() => setState(false)}
              />
            </div>
            <div className="cities">
              {filtered
                ? filtered?.map((city) => {
                    return (
                      <p className="city-s" onClick={() => handleClick(city)}>
                        {city}
                      </p>
                    );
                  })
                : arrCities?.map((city) => {
                    return (
                      <p className="city-s" onClick={() => handleClick(city)}>
                        {city}
                      </p>
                    );
                  })}
            </div>
          </div>
          <button className="btn" onClick={() => setState(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
