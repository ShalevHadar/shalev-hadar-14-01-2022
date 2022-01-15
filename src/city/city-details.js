import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export function CityDetails({ name, currentWeather }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={`/assets/${currentWeather.icon}.png`}
        alt={currentWeather.description}
        width="120"
      />
      <Box>
        <Typography variant="h5">{name}</Typography>
        <Typography>
          Temp: {currentWeather.temperature.celsius} &deg;
        </Typography>
      </Box>
    </Box>
  );
}
