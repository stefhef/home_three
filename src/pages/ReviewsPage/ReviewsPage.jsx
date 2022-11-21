import styles from "../FirstPage/style.module.css";
import { BookAnnotation } from "../../components/BookAnnotation/BookAnnotation";
import { Review } from "../../components/Review/Review";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBookById,
  selectBooksReviewsIds,
} from "../../store/book/selectors";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";

export const ReviewsPage = () => {
  const link = window.location.href.split("/");
  const bookId = link[link.length - 1];
  const dispatch = useDispatch();
  const book = useSelector((state) => selectBookById(state, Number(bookId)));
  const reviewsIds = useSelector((state) =>
    selectBooksReviewsIds(state, Number(bookId))
  );

  useEffect(() => {
    dispatch(loadReviewsIfNotExist);
  }, []);
  return (
    <main className={styles.main__reviewPage}>
      {reviewsIds && <BookAnnotation book={book} />}
      {reviewsIds &&
        reviewsIds.map((reviewId) => <Review reviewId={reviewId} />)}
    </main>
  );
};
