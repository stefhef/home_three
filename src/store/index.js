import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";

export const store = configureStore({
  reducer: combineReducers({
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
