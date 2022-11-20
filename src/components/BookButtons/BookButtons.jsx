import { useDispatch, useSelector } from "react-redux";
import { selectBookCount } from "../../store/cart/selectors";
import { cartSlice } from "../../store/cart";

import styles from "./style.module.css";

export const BookButtons = ({ place, bookId }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectBookCount(state, bookId));
  return (
    <section
      className={
        place === "main" ? styles.bookButtons : styles.bookButtons_reviews
      }
    >
      <button
        className={
          count > 0
            ? styles.bookButtons__button
            : styles.bookButtons__button_disable
        }
        onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
        disabled={count === 0}
      >
        <p className={styles.bookButtons__text}>&mdash;</p>
      </button>
      <p
        className={
          count === 0
            ? styles.bookButtons__text_count_disabled
            : styles.bookButtons__text_count
        }
      >
        {count}
      </p>
      <button
        className={styles.bookButtons__button}
        onClick={() => dispatch(cartSlice.actions.addBook(bookId))}
      >
        <p className={styles.bookButtons__text}>+</p>
      </button>
    </section>
  );
};
