import { useSelector } from "react-redux";
import { selectAllBook, selectIdWithCount } from "../../store/cart/selectors";
import styles from "./style.module.css";
import { selectBooks } from "../../store/book/selectors";

export const Total = () => {
  const allId = useSelector((state) => selectAllBook(state));
  const idWithCount = useSelector((state) => selectIdWithCount(state));

  const books = useSelector((state) => selectBooks(state));

  let summ = 0;
  if (idWithCount && books) {
    console.log(idWithCount[0][0]);
    idWithCount.forEach(function ([id, count]) {
      summ += books[Number(id - 1)].price * count;
    });
  }

  return (
    <article className={styles.total__main}>
      <section>
        <h2 className={styles.total__title}>Ваш заказ:</h2>
        {allId.map((bookId) => (
          <section className={styles.total__main__list}>
            <p className={styles.total__main__text}>
              {books[bookId - 1].title}
            </p>
            <p className={styles.total__main__price}>
              {books[bookId - 1].price} ₽
            </p>
          </section>
        ))}
      </section>
      <section className={styles.total__total__list}>
        <p className={styles.total__total__text}>Итого: {summ} ₽</p>
        <button className={styles.total__total__button}>Купить</button>
      </section>
    </article>
  );
};
