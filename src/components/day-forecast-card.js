import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function DayForecastCard({ day }) {
  const dayLabel = day.date.toLocaleDateString("en-US", { weekday: "long" });
  const temperature = Math.round(
    (day.temperature.max + day.temperature.min) / 2
  );
  return (
    <Card variant="outlined">
      <CardContent
        
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">{dayLabel}</Typography>
        <Typography sx={{ mt: ".5rem", mb: "1.5rem" }}>
          {temperature}&deg;
        </Typography>
        <CardMedia
          component="img"
          image={`/assets/${day.dayIcon}.png`}
          sx={{ width: 110 }}
        />
      </CardContent>
    </Card>
  );
}
