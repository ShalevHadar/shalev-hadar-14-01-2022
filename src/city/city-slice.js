import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCityId: null,
  cities: {},
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      const city = action.payload;
      state.activeCityId = city.id;
      state.cities[city.id] = city;
    },
    clearActiveCity: (state) => {
      state.activeCityId = null;
    },
  },
});

export const { setActiveCity, clearActiveCity } = citySlice.actions;
export default citySlice.reducer;
