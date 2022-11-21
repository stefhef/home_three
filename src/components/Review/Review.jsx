import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { selectReviewsById } from "../../store/review/selectors";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewsById(state, reviewId));
  return (
    <section className={styles.review}>
      <div className={styles.review__top}>
        <h2>{review.author}</h2>
        <p>{review.score}</p>
      </div>
      <p>{review.text}></p>
    </section>
  );
};
