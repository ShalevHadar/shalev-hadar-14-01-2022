import { useEffect, useState } from "react";
import { getCurrentLocation } from "./api/accuweather";

export function useCurrentPosition() {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    try {
      window.navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const { data } = await getCurrentLocation(latitude, longitude);
          setLocation({
            id: data.Key,
            name: data.LocalizedName,
          });
          console.log(data);
          console.log(location);
        },
        (err) => console.log(err)
      );
    } catch (error) {
      setError(`Couldn't load current city weather`);
    }
  }, []);

  return { location, error };
}
