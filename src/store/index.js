import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { reviewSlice } from "./review";

export const store = configureStore({
  reducer: combineReducers({
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
    reviews: reviewSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
