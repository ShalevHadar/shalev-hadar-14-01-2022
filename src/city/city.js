import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentWeather } from "../api/accuweather";
import { CityDetails } from "./city-details";

export function City() {
  const [currentWeather, setCurrentWeather] = useState();
  const activeCity = useSelector((state) => state.city.activeCity);
  const activeCityId = activeCity?.id;
  const loading = !currentWeather;

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

  if (loading) {
    return <div>{activeCityId ? <CircularProgress /> : ""}</div>;
  }

  return (
    <div>
      <CityDetails city={activeCity} currentWeather={currentWeather} />
    </div>
  );
}
