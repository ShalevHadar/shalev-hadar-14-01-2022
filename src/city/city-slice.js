import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCity: null,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    clearActiveCity: (state) => {
      state.activeCity = null;
    },
  },
});

export const { setActiveCity, clearActiveCity } = citySlice.actions;
export default citySlice.reducer;
