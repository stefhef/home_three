import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.inProgress,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = { ...state.entities, ...action.payload.entities };
      state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
      state.types = Array.from(
        new Set(Object.values(action.payload.entities).map((book) => book.type))
      );
      state.activeType = state.types[0];
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});
