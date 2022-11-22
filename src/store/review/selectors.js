import { Statuses } from "../../constants/statuses";

export const selectReviewModule = (state) => state.reviews;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewsById = (state, reviewId) =>
  selectReviews(state)[reviewId];

export const selectReviewsIsLoaded = (state) =>
  selectReviewModule(state).status === Statuses.success;
