import { CircularProgress, Grid } from "@mui/material";
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
  const activeCityId = activeCity?.id;
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
    <div>
      <Box
        component="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CityDetails city={activeCity} currentWeather={currentWeather} />
        <h1>Like Button</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>{currentWeather.description}</h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {forecasts.map((day) => (
          <DayForecastCard key={day.date} day={day} />
        ))}
      </Box>
    </div>
  );
}
