import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./city/city-slice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});
