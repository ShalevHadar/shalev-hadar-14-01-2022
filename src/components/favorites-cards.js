import { useSelector } from "react-redux";

import React from "react";
import { FavoriteCard } from "./favorite-card";

export function FavoriteCards() {
  const favorites = useSelector((state) => state.city.favorites);
  const cities = useSelector((state) => state.city.cities);
  console.log("hey");
  return (
    <div>
      {favorites.map((favorite) => (
        <FavoriteCard key={favorite} city={cities[favorite]} />
      ))}
    </div>
  );
}
