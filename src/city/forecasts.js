import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Forecastcard } from "../components/forecast-card";

export function Forecasts({ forecasts }) {
  return (
    <Grid container direction="row" justifyContent="center" gap={2}>
      {forecasts.map((day) => (
        <Grid item key={day.date}>
          <FiveDayForecastsCard day={day} />
        </Grid>
      ))}
    </Grid>
  );

  function FiveDayForecastsCard({ day }) {
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
}
