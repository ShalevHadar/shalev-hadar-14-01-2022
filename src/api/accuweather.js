import axios from "axios";
import {
  autocompleteMock,
  cityMock,
  fiveDaysDailyForecastMock,
  locationMock,
} from "./mock-data";

const apiClient = axios.create({
  baseURL: "https://dataservice.accuweather.com",
  params: {
    apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY,
  },
  validateStatus: (status) => status < 400,
});

export async function getCurrentLocation(lat, long) {
  // use mock
  return { data: locationMock };

  // use API
  const response = await apiClient.get(
    "locations/v1/cities/geoposition/search",
    {
      params: {
        q: `${lat},${long}`,
      },
    }
  );

  return response;
}

export async function autocomplete(query) {
  // use mock
  const mock = autocompleteMock.filter(
    (item) =>
      item.LocalizedName.indexOf(query) ||
      item.Country.LocalizedName.indexOf(query)
  );
  return { data: mock };

  // use API
  const response = await apiClient.get("locations/v1/cities/autocomplete", {
    params: {
      q: query,
    },
  });
  return response;
}

export async function getCurrentWeather(key) {
  // use mock
  return { data: cityMock };

  // use API
  const response = await apiClient.get(`currentconditions/v1/${key}`);
  return response;
}

export async function getFiveDaysDailyForecast(key, metric = true) {
  // use mock
  return { data: fiveDaysDailyForecastMock };

  // use API
  const response = await apiClient.get(`forecasts/v1/daily/5day/${key}`, {
    params: {
      metric,
    },
  });
  return response;
}
