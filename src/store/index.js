import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";

export const store = configureStore({
  reducer: combineReducers({
    book: bookSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
