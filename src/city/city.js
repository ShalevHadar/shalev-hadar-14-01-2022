import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CityDetails } from "./city-details";
import { useCurrentWeather } from "../hooks/use-current-weather";
import { useFiveDaysForecast } from "../hooks/use-five-days-forecast";
import { DayForecastCard } from "../components/day-forecast-card";
import { ToggleFavorite } from "./toggle-favorite-button";
import { CardList } from "../components/card-list";
import { NotificationSnackBar } from "../components/notification-snack-bar";
import { useCurrentPosition } from "../hooks/use-current-position";
import { setActiveCity } from "./city-slice";

export function City() {
  const dispatch = useDispatch();
  const { activeCityId, activeCity } = useSelector((state) => ({
    activeCityId: state.city.activeCityId,
    activeCity: state.city.cities[state.city.activeCityId],
  }));
  const { location, error: errorCurrentPosition } = useCurrentPosition();
  const { forecast, error: errorForecast } = useFiveDaysForecast(activeCityId);
  const { currentWeather, error: errorCurrentWeather } =
    useCurrentWeather(activeCityId);

  const error = errorForecast || errorCurrentWeather || errorCurrentPosition;
  const loading = !currentWeather || !forecast || !location;

  if (!activeCity && location) {
    dispatch(setActiveCity({ id: location.id, name: location.name }));
  }

  if (error) {
    return (
      <Card>
        <CardContent>
          <NotificationSnackBar
            message={error}
            severity="error"
            active={Boolean(error)}
          />
          <Typography variant="h4">{error}</Typography>
        </CardContent>
      </Card>
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
