import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { useCurrentWeather } from "../use-current-weather";

export function FavoriteCard({ city, onClick }) {
  const { cityWeather: currentWeather, error } = useCurrentWeather(city.id);
  const loading = !currentWeather;

  if (!city || error) {
    return null;
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Card variant="outlined" onClick={onClick} sx={{ width: "184px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" textAlign="center">
          {city.name}
        </Typography>
        <Typography sx={{ mt: ".5rem", mb: "0.2rem" }}>
          {currentWeather.temperature.celsius}&deg;
        </Typography>
        <CardMedia
          component="img"
          image={`/assets/${currentWeather.icon}.png`}
          sx={{ width: 110 }}
        />
        <Typography>{currentWeather?.description}</Typography>
      </CardContent>
    </Card>
  );
}
