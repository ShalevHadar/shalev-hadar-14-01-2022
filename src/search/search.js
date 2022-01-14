import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as accuweather from "../api/accuweather";
import { clearActiveCity, setActiveCity } from "../city/city-slice";

export function Search() {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = async (event, value, reason) => {
    if (reason === "input") {
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
    }
  };

  const handleChange = (event, city, reason) => {
    //console.log(value, reason);

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
        id="free-solo-demo"
        freeSolo
        options={options.map((option) => option)}
        getOptionLabel={(option) => `${option.name}`}
        renderInput={(params) => (
          <TextField {...params} placeholder="Enter city" />
        )}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
}
