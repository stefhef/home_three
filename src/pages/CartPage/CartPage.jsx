import { Total } from "../../components/Total/Total";
import styles from "./style.module.css";
import { BooksList } from "../../components/BooksList/BooksList";
import { useSelector } from "react-redux";
import { selectAllBook } from "../../store/cart/selectors";

export const CartPage = () => {
  const allId = useSelector((state) => selectAllBook(state));
  return (
    <main className={styles.main__cartPage}>
      <Total />
      <BooksList booksIds={allId} />
    </main>
  );
};
