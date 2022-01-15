import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/accuweather";

export function FavoriteCard({ city }) {
  const [cityWeather, setCityWeather] = useState();
  const cityId = city.id;
  const loading = !cityWeather;

  useEffect(() => {
    const getFavoriteCityData = async () => {
      const {
        data: [cityWeather],
      } = await getCurrentWeather(cityId);
      setCityWeather({
        description: cityWeather.WeatherText,
        icon: cityWeather.WeatherIcon,
        temperature: {
          fahrenheit: cityWeather.Temperature.Imperial.Value,
          celsius: cityWeather.Temperature.Metric.Value,
        },
      });
    };
    if (cityId) {
      getFavoriteCityData();
    }
  }, [cityId]);

  if (!city) {
    return null;
  }
  if (loading) {
    return <CircularProgress />;
  }

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
        <Typography variant="h6">{city.name}</Typography>
        <Typography sx={{ mt: ".5rem", mb: "0.2rem" }}>
          {cityWeather.temperature.celsius}&deg;
        </Typography>
        <CardMedia
          component="img"
          image={`/assets/${cityWeather.icon}.png`}
          sx={{ width: 110 }}
        />
        <Typography>{cityWeather?.description}</Typography>
      </CardContent>
    </Card>
  );
}
