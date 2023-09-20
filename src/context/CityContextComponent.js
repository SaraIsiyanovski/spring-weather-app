import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CityContext = createContext(null);
export const CityContextComponent = ({ children }) => {
  const [allCities, setAllCities] = useState();
  const url = "https://countriesnow.space/api/v0.1/countries";

  useEffect(() => {
    const promise = async () => {
      try {
        const axios1 = await axios.get(url);

        return setAllCities([axios1.data]);
      } catch (error) {
        alert(error);
      }
    };
    promise();
  }, [url]);

  const value = { allCities };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};
