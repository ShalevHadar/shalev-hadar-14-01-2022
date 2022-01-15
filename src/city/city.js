import { styled } from "@mui/material/styles";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { CityDetails } from "./city-details";
import { useCurrentWeather } from "../use-current-weather";
import { useFiveDaysForecast } from "../use-five-days-forecast";
import { DayForecastCard } from "../favorites-page/day-forecast-card";
import { ToggleFavorite } from "./toggle-favorite-button";

export function City() {
  const { activeCityId, activeCity } = useSelector((state) => ({
    activeCityId: state.city.activeCityId,
    activeCity: state.city.cities[state.city.activeCityId],
  }));
  const forecast = useFiveDaysForecast(activeCityId);
  const currentWeather = useCurrentWeather(activeCityId);
  const loading = !currentWeather || !forecast;

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
        <DayForecastCardListBox>
          {forecast.map((day) => (
            <DayForecastCard key={day.date} day={day} />
          ))}
        </DayForecastCardListBox>
      </CardContent>
    </Card>
  );
}

const DayForecastCardListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  columnGap: theme.spacing(2),
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
