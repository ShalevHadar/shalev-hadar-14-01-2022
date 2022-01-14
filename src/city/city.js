import React from "react";
import { useSelector } from "react-redux";

export function City() {
  const activeCity = useSelector((state) => state.city.activeCity);
  console.log(activeCity);

  return (
    <div>
      <h2>{activeCity?.name}</h2>
      <h2>{activeCity?.name}</h2>
    </div>
  );
}
