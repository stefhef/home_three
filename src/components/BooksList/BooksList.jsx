import { Book } from "../Book/Books";
import { memo } from "react";

import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooksByType } from "../../store/book/selectors";

export const BooksList = memo(function () {
  const { typeId } = useParams();

  const books = useSelector((state) =>
    selectBooksByType(state, Number(typeId))
  );
  return (
    <article className={styles.booksList}>
      {books.map((book) => (
        <Book counterPlace={"main"} key={book.id} book={book} />
      ))}
    </article>
  );
});
