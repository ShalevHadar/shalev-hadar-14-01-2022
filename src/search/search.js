import { Autocomplete, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as accuweather from "../api/accuweather";
import { clearActiveCity, setActiveCity } from "../city/city-slice";
import { useDebounceTime } from "../components/debounce";
import { NotificationSnackBar } from "../components/notification-snack-bar";
import { validate } from "../components/validate-regex";

export function Search() {
  const [options, setOptions] = useState([]);
  const [val, setDebounced] = useDebounceTime(450);
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (val) {
      getAutocompleteCities(val);
    } else {
      return;
    }
  }, [val]);

  const getAutocompleteCities = async (value) => {
    try {
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
    } catch (error) {
      setError(`Couldn't search for cities`);
    }
  };

  // on input, get autocomplete by the value
  const handleInputChange = async (event, value, reason) => {
    setErrorMsg(undefined);
    if (reason === "input" && validate(value)) {
      setError(undefined);
      setDebounced(value);
    } else {
      setErrorMsg("Only english letters are allowed");
    }
  };

  // after pick, move city (key & value to )
  const handleChange = (event, city, reason) => {
    const handlers = {
      selectOption: () => {
        if (city) {
          dispatch(setActiveCity({ id: city.id, name: city.name }));
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
      <Typography sx={{ display: "flex", color: "red" }}>
        {errorMsg} <span style={{ color: "white" }}>_</span>
      </Typography>
      <Autocomplete
        id="search-city-input"
        options={options}
        getOptionLabel={(option) =>
          `${option.name}, ${option.country} (${option.area})`
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Enter city"
            error={Boolean(error)}
            helperText={error}
          />
        )}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      {error && (
        <NotificationSnackBar
          message={error}
          severity="error"
          active={Boolean(error)}
        />
      )}
    </div>
  );
}
