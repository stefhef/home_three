import styles from "../FirstPage/style.module.css";
import { BookAnnotation } from "../../components/BookAnnotation/BookAnnotation";
import { Review } from "../../components/Review/Review";
import { useDispatch, useSelector } from "react-redux";
import { selectBooksReviewsIds } from "../../store/book/selectors";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";
import { selectReviewsIsLoaded } from "../../store/review/selectors";

export const ReviewsPage = () => {
  const link = window.location.href.split("/");
  const bookId = link[link.length - 1];
  const isLoading = useSelector((state) => selectReviewsIsLoaded(state));
  const dispatch = useDispatch();
  const reviewsIds = useSelector((state) =>
    selectBooksReviewsIds(state, Number(bookId))
  );
  console.log(reviewsIds);
  useEffect(() => {
    dispatch(loadReviewsIfNotExist);
  }, []);

  if (!isLoading) {
    return <span>Загрузка...</span>;
  }

  return (
    <main className={styles.main__reviewPage}>
      {reviewsIds && <BookAnnotation bookId={bookId} />}
      {reviewsIds &&
        reviewsIds.map((reviewId) => (
          <Review key={reviewId} reviewId={reviewId} />
        ))}
    </main>
  );
};
