import { BookButtons } from "../BookButtons/BookButtons";
import { selectBookById } from "../../store/book/selectors";
import { useSelector } from "react-redux";

import styles from "./style.module.css";

export const Book = ({ book, counterPlace }) => {
  // const book = useSelector((state) => selectBookById(state, bookId));
  if (!book) {
    return <h1>Ошибка. Книги не найдены</h1>;
  }
  return (
    <article className={styles.books}>
      <div>
        <h2 className={styles.books__book_title}>{book.title}</h2>
        <p className={styles.books__book_text}>{book.author}</p>
        <p className={styles.books__book_text}>{book.genre}</p>
        <h2 className={styles.books__book_price}>{book.price} ₽</h2>
      </div>
      <BookButtons place={counterPlace} bookId={book.id} />
    </article>
  );
};
