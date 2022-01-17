import { createSlice } from "@reduxjs/toolkit";

// window.navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position.coords),
//   (err) => console.log(err)
// );

const initialState = {
  activeCityId: 215854,
  favorites: [],
  cities: { 215854: { id: 215854, name: "Tel Aviv" } }, // id, name
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
    addToFavorites: (state, action) => {
      state.favorites = [...new Set([...state.favorites, action.payload])];
    },
    removeFromFavorites: (state, action) => {
      const cityId = action.payload;
      const cityIdIndex = state.favorites.indexOf(cityId);
      if (cityIdIndex >= 0) {
        state.favorites = [
          ...state.favorites.slice(0, cityIdIndex),
          ...state.favorites.slice(cityIdIndex + 1),
        ];
      }
    },
  },
});

export const {
  setActiveCity,
  clearActiveCity,
  addToFavorites,
  removeFromFavorites,
} = citySlice.actions;
export default citySlice.reducer;
