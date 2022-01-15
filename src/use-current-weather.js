import { useEffect, useState } from "react";
import { getCurrentWeather } from "./api/accuweather";

export function useCurrentWeather(cityId) {
  const [cityWeather, setCityWeather] = useState();

  useEffect(() => {
    const getCurrentCityWeather = async () => {
      const {
        data: [cityWeather],
      } = await getCurrentWeather(cityId);
      setCityWeather({
        description: cityWeather.WeatherText,
        icon: cityWeather.WeatherIcon,
        temperature: {
          fahrenheit: cityWeather.Temperature.Imperial.Value,
          celsius: cityWeather.Temperature.Metric.Value,
        },
      });
    };
    if (cityId) {
      getCurrentCityWeather();
    }
  }, [cityId]);

  return cityWeather;
}
