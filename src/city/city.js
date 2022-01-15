import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getCurrentWeather,
  getFiveDaysDailyForecast,
} from "../api/accuweather";
import { DayForecastCard } from "../components/day-forecast-card";
import { CityDetails } from "./city-details";

export function City() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecasts, setForecasts] = useState();
  const activeCity = useSelector((state) => state.city.activeCity);
  const loading = !currentWeather || !forecasts;

  // getting current city weather
  useEffect(() => {
    const updateCurrentWeather = async () => {
      const {
        data: [weather],
      } = await getCurrentWeather(activeCity?.id);
      setCurrentWeather({
        description: weather.WeatherText,
        icon: weather.WeatherIcon,
        temperature: {
          fahrenheit: weather.Temperature.Imperial.Value,
          celsius: weather.Temperature.Metric.Value,
        },
      });
    };
    if (activeCity?.id) {
      updateCurrentWeather();
    }
  }, [activeCity?.id]);

  // getting 5 days forecast
  useEffect(() => {
    const updateForecast = async () => {
      const {
        data: { DailyForecasts: forecasts },
      } = await getFiveDaysDailyForecast(activeCity?.id);
      setForecasts(
        forecasts.map((forecast) => ({
          date: new Date(forecast.Date),
          temperature: {
            min: forecast.Temperature.Minimum.Value,
            max: forecast.Temperature.Maximum.Value,
          },
          dayIcon: forecast.Day.Icon,
          nightIcon: forecast.Night.Icon,
        }))
      );
    };
    if (activeCity?.id) {
      updateForecast();
    }
  }, [activeCity?.id]);

  if (!activeCity) {
    return null;
  }
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          component="header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CityDetails name={activeCity.name} currentWeather={currentWeather} />
          <h1>Like Button</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
            mb: 10,
          }}
        >
          <Typography variant="h4">{currentWeather.description}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: "1rem",
          }}
        >
          {forecasts.map((day) => (
            <DayForecastCard key={day.date} day={day} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
