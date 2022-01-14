import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { autocomplete } from "../api/accuweather";
import * as accuweather from "../api/accuweather";

export function Search() {
  const [options, setOptions] = useState([]);
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

  const handleChange = (event, value, reason) => {
    //console.log(value, reason);
    if (reason === "selectOption") {
      console.log(value);
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
