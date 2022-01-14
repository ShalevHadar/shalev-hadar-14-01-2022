import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getCurrentWeather,
  getFiveDaysDailyForecast,
} from "../api/accuweather";
import { CityDetails } from "./city-details";
import { Forecasts } from "./forecasts";

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

  if (loading) {
    return <div>{activeCityId ? <CircularProgress /> : ""}</div>;
  }

  return (
    <div>
      <header>
        <CityDetails city={activeCity} currentWeather={currentWeather} />
      </header>
      <div>
        <h2>{currentWeather.description}</h2>
      </div>
      <div>
        <Forecasts forecasts={forecasts} />
      </div>
    </div>
  );
}
