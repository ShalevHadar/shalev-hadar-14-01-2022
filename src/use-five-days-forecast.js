import { useEffect, useState } from "react";
import { getFiveDaysDailyForecast } from "./api/accuweather";

export function useFiveDaysForecast(cityId) {
  const [forecast, setForecast] = useState();

  useEffect(() => {
    const updateForecast = async () => {
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
    };
    if (cityId) {
      updateForecast();
    }
  }, [cityId]);

  return forecast;
}
