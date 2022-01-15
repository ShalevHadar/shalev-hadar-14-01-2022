import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function DayForecastCard({ day }) {
  const label = day.date.toLocaleDateString("en-US", { weekday: "long" });
  const temperature = Math.round(
    (day.temperature.max + day.temperature.min) / 2
  );
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
          height: 180,
        }}
      >
        <Typography variant="h5">{label}</Typography>

        <CardMedia
          component="img"
          image={`/assets/${day.dayIcon}.png`}
          sx={{ width: 110 }}
        />
        <div>Temperature: {temperature}&deg;</div>
      </CardContent>
    </Card>
  );
}
