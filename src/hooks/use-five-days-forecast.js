import { useEffect, useState } from "react";
import { getFiveDaysDailyForecast } from "../api/accuweather";

export function useFiveDaysForecast(cityId) {
  const [forecast, setForecast] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const updateForecast = async () => {
      try {
        const {
          data: { DailyForecasts: forecasts },
        } = await getFiveDaysDailyForecast(cityId);
        setForecast(
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
      } catch (error) {
        setError(`Couldn't load daily forecast weather`);
      }
    };
    if (cityId) {
      updateForecast();
    }
  }, [cityId]);

  return { forecast, error };
}
