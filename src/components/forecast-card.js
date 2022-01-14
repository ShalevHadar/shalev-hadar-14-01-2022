import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function Forecastcard({ city, currentWeather }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        boxShadow: "0px 0px 2px 2px #D3D3D3",
        minWidth: 250,
        maxWidth: 250,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{city?.name}</Typography>
        <div>{currentWeather?.description}</div>

        <CardMedia
          component="img"
          image={`/assets/${currentWeather?.icon}.png`}
          sx={{ width: 110 }}
        />
        <div>Current temp: {currentWeather?.temperature.celsius} &deg;</div>
      </CardContent>
    </Card>
  );
}
