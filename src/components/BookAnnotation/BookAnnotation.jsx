import styles from "./style.module.css";
import { Book } from "../Book/Books";
import { Annotation } from "../Annotation/Annotation";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";

export const BookAnnotation = ({ bookId }) => {
  const book = useSelector((state) => selectBookById(state, bookId));
  return (
    <article className={styles.bookAnnotation}>
      <Book counterPlace={"reviews"} bookId={book.id} />
      <Annotation annotation={book.annotation} />
    </article>
  );
};
