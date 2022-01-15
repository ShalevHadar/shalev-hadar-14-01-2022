import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { FavoriteCard } from "./favorite-card";
import { Box, Card, CardContent } from "@mui/material";
import { setActiveCity } from "../city/city-slice";
import { useNavigate } from "react-router-dom";

export function FavoriteCards() {
  const favorites = useSelector((state) => state.city.favorites);
  const cities = useSelector((state) => state.city.cities);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (favorite) => {
    const cityData = cities[favorite];
    if (cityData) {
      dispatch(setActiveCity({ id: cityData.id, name: cityData.name }));
    }
    navigate("/");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: "1rem",
          }}
        >
          {favorites.map((favorite) => (
            <div key={favorite} onClick={() => handleSelect(favorite)}>
              <FavoriteCard city={cities[favorite]} />
            </div>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
