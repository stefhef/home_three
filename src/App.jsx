import { FirstPage } from "./pages/FirstPage/FirstPage";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundpage/NotFoundPage";
import { BooksList } from "./components/BooksList/BooksList";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<h1>Главная страница</h1>} />
          <Route path={"/books"} element={<FirstPage />}>
            <Route path={":typeId"} element={<BooksList />} />
          </Route>
          <Route path={"/reviews"} element={<ReviewsPage />}></Route>
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
