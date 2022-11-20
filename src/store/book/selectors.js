import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBooksByType = (state, typeId) =>
  Object.values(selectBookModule(state).entities).filter(
    (book) => book.type === selectBookModule(state).types[typeId]
  );

export const selectBooksReviewsIds = (state, bookId) =>
  selectBookModule(state).entities[bookId].reviews;

export const selectIsBooksLoading = (state) =>
  selectBookModule(state).status === Statuses.inProgress;

export const selectBooksTypes = (state) => selectBookModule(state).types;
export const selectBooksIds = (state) => selectBookModule(state).ids;

export const selectActiveType = (state) => selectBookModule(state).activeType;
