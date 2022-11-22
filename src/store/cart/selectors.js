export const selectCartModule = (state) => state.cart;

export const selectBookCountByBookId = (state, bookId) =>
  selectCartModule(state)[bookId];

export const selectAllBook = (state) => Object.values(selectCartModule(state));

export const selectAllCart = (state) => Object.entries(selectCartModule(state));
