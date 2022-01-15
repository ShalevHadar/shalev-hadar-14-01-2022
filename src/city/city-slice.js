import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCity: null,
  favorites: [],
  cities: {},
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      const cityId = action.payload.id;
      const cityName = action.payload.name;
      state.activeCity = { id: cityId, name: cityName };
    },
    clearActiveCity: (state) => {
      state.activeCity = null;
    },
  },
});

export const { setActiveCity, clearActiveCity } = citySlice.actions;
export default citySlice.reducer;
