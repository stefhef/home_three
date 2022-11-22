import { useSelector } from "react-redux";
import {
  selectAllBook,
  selectAllCart,
  selectCartModule,
} from "../../store/cart/selectors";
import styles from "./style.module.css";
import { selectBookById, selectBooks } from "../../store/book/selectors";

export const Total = () => {
  const all = useSelector((state) => selectAllCart(state));
  const books = useSelector((state) => selectBooks(state));
  // console.log(`All: ${all.forEach(([bookId, count]) =>
  //   console.log(`Book: ${bookId}; ct: ${count}`)}`);
  all.forEach(([bookId, count]) =>
    console.log(`Book: ${bookId}; ct: ${count}`)
  );
  return (
    <article>
      <h2>Ваш заказ:</h2>
      {all.map(([bookId, count]) => (
        <section className={styles.total__main}>
          <p>
            BookId: {bookId}; Count: {count}
          </p>
          {/*<p>{books[Number(bookId)]}</p>*/}
          {/*<p>index 0 {bookId}</p>*/}
          <p className={styles.total__price}>{count}</p>
        </section>
      ))}
    </article>
  );
};
