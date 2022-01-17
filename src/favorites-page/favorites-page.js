import React from "react";
import { Layout } from "../components/layout";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteCard } from "./favorite-card";
import { setActiveCity } from "../city/city-slice";
import { useNavigate } from "react-router-dom";
import { CardList } from "../components/card-list";
import { Typography } from "@mui/material";

export function FavoritesPage() {
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
    <Layout>
      <Box sx={{ mt: 5 }}>
        <CardList>
          {favorites.length === 0 ? (
            <Typography variant="h5">There's no cities in favorites</Typography>
          ) : (
            <>
              {favorites.map((id) => (
                <FavoriteCard
                  onChangeActive={(event, newHover) => {
                    console.log(event, newHover);
                  }}
                  city={cities[id]}
                  key={id}
                  onClick={() => handleSelect(id)}
                />
              ))}
            </>
          )}
        </CardList>
      </Box>
    </Layout>
  );
}
