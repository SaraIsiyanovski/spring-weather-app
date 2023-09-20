import React from "react";
import { AnotherLocation } from "./AnotherLocation";
import { MoreInfo } from "./MoreInfo";
import { SearchCity } from "./SearchCity";

export const RightComponent = () => {
  return (
    <div className="right">
      <AnotherLocation />
      <MoreInfo />
    </div>
  );
};
