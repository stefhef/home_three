import { reviewSlice } from "./index";
import { prepareData } from "../utils";
import { selectReviews } from "./selectors";

export const loadReviewsIfNotExist = (dispatch, getState, bookId) => {
  if (selectReviews(getState())?.length > 0) {
    console.log("all upload");
    return;
  }
  dispatch(reviewSlice.actions.startLoading());
  fetch(`http://localhost:8000/get_all_reviews`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(reviewSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(reviewSlice.actions.failLoading());
    });
};
