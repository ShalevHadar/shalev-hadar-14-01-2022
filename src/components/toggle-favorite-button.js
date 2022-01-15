import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../city/city-slice";

export function ToggleFavorite({ cityId }) {
  const theme = useTheme();
  const showHelpText = useMediaQuery(theme.breakpoints.up("sm"));

  const isFavorite = useSelector((state) =>
    state.city.favorites.includes(cityId)
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    const action = isFavorite ? removeFromFavorites : addToFavorites;
    dispatch(action(cityId));
  };

  return (
    <Button
      size="large"
      sx={{ textTransform: "none" }}
      startIcon={isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      aria-label="toggle favorites"
      onClick={handleClick}
    >
      {showHelpText &&
        (isFavorite ? "Remove from favorites" : "Add to favorites")}
    </Button>
  );
}
