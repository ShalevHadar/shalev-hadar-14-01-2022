import { useEffect, useState } from "react";
import { getCurrentLocation } from "./api/accuweather";

export function useCurrentPosition() {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const { data } = await getCurrentLocation(latitude, longitude);
          setLocation({
            id: data.Key,
            name: data.LocalizedName,
          });
        } catch (error) {
          setError(`Couldn't load current city weather`);
        }
      },
      (err) => {
        setLocation({
          id: 215854,
          name: "Tel Aviv",
        });
      }
    );
  }, []);

  return { location, error };
}
