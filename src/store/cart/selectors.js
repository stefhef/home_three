export const selectCartModule = (state) => state.cart;

export const selectBookCountByBookId = (state, bookId) =>
  selectCartModule(state)[bookId];

export const selectAllBook = (state) => Object.keys(selectCartModule(state));

export const selectIdWithCount = (state) =>
  Object.entries(selectCartModule(state));
