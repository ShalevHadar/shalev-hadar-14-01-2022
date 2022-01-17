import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./city/city-slice";
import themeReducer from "./theme/theme-slice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    theme: themeReducer,
  },
});
