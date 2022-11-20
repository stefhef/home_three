import { TypeList } from "../../components/TypeList/TypeList";
import { BooksList } from "../../components/BooksList/BooksList";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooks, selectIsBooksLoading } from "../../store/book/selectors";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { Outlet } from "react-router-dom";

export const FirstPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => selectBooks(state));
  useEffect(() => {
    dispatch(loadBooksIfNotExist);
  }, []);

  const isLoading = useSelector((state) => selectIsBooksLoading(state));
  if (isLoading) {
    return <h2>Загрузка</h2>;
  }

  return (
    <main className={styles.main__firstPage}>
      <TypeList />
      <Outlet />
    </main>
  );
};
