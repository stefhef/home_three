import { TypeList } from "../../components/TypeList/TypeList";
import { BooksList } from "../../components/BooksList/BooksList";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../store/book/selectors";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";

export const FirstPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => selectBooks(state));
  console.log(books);
  const types = Array.from(new Set(books.map((book) => book.type)));
  const [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    dispatch(loadBooksIfNotExist);
  }, []);

  return (
    <main className={styles.main__firstPage}>
      <TypeList
        types={types}
        selectedTypes={selectedType}
        setSelectedTypes={setSelectedType}
      />
      <BooksList
        books={books.filter((item) => {
          return item.type === types[selectedType];
        })}
      />
    </main>
  );
};
