import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as accuweather from "../api/accuweather";
import { clearActiveCity, setActiveCity } from "../city/city-slice";
import { useDebounceTime } from "../components/debounce";

export function Search() {
  const [options, setOptions] = useState([]);
  const [val, setDebounced] = useDebounceTime(450);
  const dispatch = useDispatch();

  useEffect(() => {
    if (val) {
      getAutocompleteCities(val);
    } else {
      return;
    }
  }, [val]);

  const getAutocompleteCities = async (value) => {
    if (!value) {
      return;
    }
    const response = await accuweather.autocomplete(value);
    const nextOptions = response.data.map((location) => {
      return {
        id: location.Key,
        name: location.LocalizedName,
        area: location.AdministrativeArea.LocalizedName,
        country: location.Country.LocalizedName,
      };
    });
    setOptions(nextOptions);
  };

  // on input, get autocomplete by the value
  const handleInputChange = async (event, value, reason) => {
    if (reason === "input") {
      setDebounced(value);
    }
  };

  // after pick, move city (key & value to )
  const handleChange = (event, city, reason) => {
    const handlers = {
      selectOption: () => {
        if (city) {
          dispatch(setActiveCity(city));
        }
      },
      clear: () => {
        dispatch(clearActiveCity());
      },
    };
    const handler = handlers[reason];
    if (handler) {
      handler();
    }
  };

  return (
    <div>
      <Autocomplete
        id="search-city-input"
        options={options}
        getOptionLabel={(option) =>
          `${option.name}, ${option.country} (${option.area})`
        }
        renderInput={(params) => (
          <TextField {...params} placeholder="Enter city" />
        )}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
}
