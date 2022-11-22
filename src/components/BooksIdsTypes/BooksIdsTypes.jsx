import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooksIdsByType } from "../../store/book/selectors";
import { BooksList } from "../BooksList/BooksList";

export const BooksIdsTypes = () => {
  const { typeId } = useParams();

  const booksIds = useSelector((state) =>
    selectBooksIdsByType(state, Number(typeId))
  );
  return <BooksList booksIds={Object.values(booksIds)} />;
};
