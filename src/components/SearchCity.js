import React, { useContext, useState } from "react";
import { AiOutlineClose, IconName } from "react-icons/ai";
import { CityContext } from "../context/CityContextComponent";
import { WeatherContext } from "../context/WeatherContextComponent";

export const SearchCity = ({ setState }) => {
  const { allCities } = useContext(CityContext);
  const { city, setCity } = useContext(WeatherContext);
  const [filtered, setFiltered] = useState();
  const [searchInput, setSearchInput] = useState();
  const citiesArr = allCities[0]?.data;
  console.log(citiesArr);

  const cityArr = citiesArr?.map((data) => data.cities);
  console.log(cityArr);

  const allCitiesArr = cityArr.flat(1);
  console.log(allCitiesArr);

  const handleClick = (city) => {
    setCity(city);
    setState(false);
  };

  const findCity = (e) => {
    setSearchInput(e.target.value);
    const filterCity = allCitiesArr.filter((city) =>
      city.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filterCity);
  };

  console.log(filtered);
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
                : allCitiesArr?.map((city) => {
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
