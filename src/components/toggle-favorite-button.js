import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../city/city-slice";

export function ToggleFavorite({ cityId }) {
  const favorites = useSelector((state) => state.city.favorites);
  const dispatch = useDispatch();
  const isKeyInsideFavorites = favorites.includes(cityId);

  const handleClick = () => {
    if (!isKeyInsideFavorites) {
      dispatch(addToFavorites(cityId));
    } else {
      dispatch(removeFromFavorites(cityId));
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      style={{ textTransform: "none" }}
      sx={{ height: 45 }}
    >
      {isKeyInsideFavorites ? (
        <Box sx={{ display: "flex" }}>
          <FavoriteBorderIcon sx={{ mr: 1 }} />
          <Typography>Remove from Favorites</Typography>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <FavoriteIcon sx={{ mr: 1 }} />
          <Typography>Add to Favorites</Typography>
        </Box>
      )}
    </Button>
  );
}
