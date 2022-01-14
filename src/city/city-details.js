import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Forecastcard } from "../components/forecast-card";

export function CityDetails({ city, currentWeather }) {
  return (
    <div>
      <Forecastcard city={city} currentWeather={currentWeather} />
    </div>
  );
}
