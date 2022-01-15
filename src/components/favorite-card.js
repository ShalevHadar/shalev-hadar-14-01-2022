import React from "react";

export function FavoriteCard({ city }) {
  console.log(city);
  return (
    <div>
      <div>{city.name}</div>
      <div>{city.id}</div>
    </div>
  );
}
