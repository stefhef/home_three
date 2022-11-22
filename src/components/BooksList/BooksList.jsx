import { Book } from "../Book/Books";
import { memo } from "react";

import styles from "./style.module.css";

export const BooksList = memo(function ({ booksIds }) {
  return (
    <article className={styles.booksList}>
      {Object.values(booksIds).map((id) => (
        <Book counterPlace={"main"} key={id} bookId={id} />
      ))}
    </article>
  );
});
