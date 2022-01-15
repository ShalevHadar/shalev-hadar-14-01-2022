import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentWeather,
  getFiveDaysDailyForecast,
} from "../api/accuweather";
import { DayForecastCard } from "../components/day-forecast-card";
import { ToggleFavorite } from "../components/toggle-favorite-button";
import { CityDetails } from "./city-details";
import { setActiveCity } from "./city-slice";

export function City() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecasts, setForecasts] = useState();
  const dispatch = useDispatch();
  const { activeCityId, activeCity } = useSelector((state) => ({
    activeCityId: state.city.activeCityId,
    activeCity: state.city.cities[state.city.activeCityId],
  }));
  const loading = !currentWeather || !forecasts;

  // getting current city weather
  useEffect(() => {
    const updateCurrentWeather = async () => {
      const {
        data: [weather],
      } = await getCurrentWeather(activeCityId);
      setCurrentWeather({
        description: weather.WeatherText,
        icon: weather.WeatherIcon,
        temperature: {
          fahrenheit: weather.Temperature.Imperial.Value,
          celsius: weather.Temperature.Metric.Value,
        },
      });
    };
    if (activeCityId) {
      updateCurrentWeather();
    }
  }, [activeCityId]);

  // getting 5 days forecast
  useEffect(() => {
    const updateForecast = async () => {
      const {
        data: { DailyForecasts: forecasts },
      } = await getFiveDaysDailyForecast(activeCityId);
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
    if (activeCityId) {
      updateForecast();
    }
  }, [activeCityId]);

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
          <CityDetails city={activeCity} currentWeather={currentWeather} />
          <ToggleFavorite cityId={activeCityId} />
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
