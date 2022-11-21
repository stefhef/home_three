import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBookById = (state, bookId) => selectBooks(state)[bookId];

export const selectBooksByType = (state, typeId) =>
  selectBooks(state).filter(
    (book) => book.type === selectBookModule(state).types[typeId]
  );

export const selectBooksReviewsIds = (state, bookId) =>
  selectBooks(state)[bookId].reviews;

export const selectIsBooksLoading = (state) =>
  selectBookModule(state).status === Statuses.inProgress;

export const selectBooksTypes = (state) => selectBookModule(state).types;
export const selectBooksIds = (state) => selectBookModule(state).ids;
