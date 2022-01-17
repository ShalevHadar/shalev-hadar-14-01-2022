import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { CityDetails } from "./city-details";
import { useCurrentWeather } from "../use-current-weather";
import { useFiveDaysForecast } from "../use-five-days-forecast";
import { DayForecastCard } from "../favorites-page/day-forecast-card";
import { ToggleFavorite } from "./toggle-favorite-button";
import { CardList } from "../components/card-list";
import { NotificationSnackBar } from "../components/notification-snack-bar";

export function City() {
  const { activeCityId, activeCity } = useSelector((state) => ({
    activeCityId: state.city.activeCityId,
    activeCity: state.city.cities[state.city.activeCityId],
  }));
  const { forecast, error: errorForecast } = useFiveDaysForecast(activeCityId);
  const { currentWeather, error: errorCurrentWeather } =
    useCurrentWeather(activeCityId);
  const error = errorForecast || errorCurrentWeather;
  const loading = !currentWeather || !forecast;
  

  if (error) {
    return (
      <>
        <NotificationSnackBar
          message={error}
          severity="error"
          active={Boolean(error)}
        />
        <Typography variant="h4">{error}</Typography>
      </>
    );
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
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
          <CardList>
            {forecast.map((day) => (
              <DayForecastCard key={day.date} day={day} />
            ))}
          </CardList>
        </CardContent>
      </Card>
    </>
  );
}
