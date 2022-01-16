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
import { useCustomizedSnackbar } from "../components/use-snack-bar";

export function City() {
  const { activeCityId, activeCity } = useSelector((state) => ({
    activeCityId: state.city.activeCityId,
    activeCity: state.city.cities[state.city.activeCityId],
  }));
  const forecast = useFiveDaysForecast(activeCityId);
  const currentWeather = useCurrentWeather(activeCityId);
  const mySnack = useCustomizedSnackbar(
    "API fail, please enter another key",
    "error"
  );
  const loading = !currentWeather || !forecast;

  if (!(forecast && currentWeather)) {
    return (
      <Typography variant="h4">
        Failure: please insert another API key {mySnack}
      </Typography>
    );
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
        <CardList>
          {forecast.map((day) => (
            <DayForecastCard key={day.date} day={day} />
          ))}
        </CardList>
      </CardContent>
    </Card>
  );
}
