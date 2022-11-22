import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";

export const SelectedBook = ({ bookId }) => {
  const book = useSelector((state) => selectBookById(bookId));
  return <article></article>;
};
