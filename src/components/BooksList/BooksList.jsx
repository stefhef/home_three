import { Book } from "../Book/Books";
import { memo } from "react";

import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooksIdsByType } from "../../store/book/selectors";

export const BooksList = memo(function () {
  const { typeId } = useParams();

  const booksIds = useSelector((state) =>
    selectBooksIdsByType(state, Number(typeId))
  );
  // console.log(
  //   `BookIds: ${Object.values(booksIds).map((id) => console.log(`id: ${id}`))}`
  // );
  return (
    <article className={styles.booksList}>
      {Object.values(booksIds).map((id) => (
        <Book counterPlace={"main"} key={id} bookId={id} />
      ))}
    </article>
  );
});
