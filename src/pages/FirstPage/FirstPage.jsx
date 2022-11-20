import { TypeList } from "../../components/TypeList/TypeList";
import styles from "./style.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsBooksLoading } from "../../store/book/selectors";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { Outlet } from "react-router-dom";

export const FirstPage = () => {
  const dispatch = useDispatch();
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
