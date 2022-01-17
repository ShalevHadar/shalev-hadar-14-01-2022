import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/accuweather";

export function useCurrentWeather(cityId) {
  const [currentWeather, setCurrentWeather] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getCurrentCityWeather = async () => {
      try {
        const {
          data: [cityWeather],
        } = await getCurrentWeather(cityId);
        setCurrentWeather({
          description: cityWeather.WeatherText,
          icon: cityWeather.WeatherIcon,
          temperature: {
            fahrenheit: cityWeather.Temperature.Imperial.Value,
            celsius: cityWeather.Temperature.Metric.Value,
          },
        });
      } catch (error) {
        setError(`Couldn't load current city weather`);
      }
    };
    if (cityId) {
      getCurrentCityWeather();
    }
  }, [cityId]);

  return { currentWeather, error };
}
