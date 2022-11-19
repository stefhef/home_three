import { FirstPage } from "./pages/FirstPage/FirstPage";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<FirstPage />} />
          <Route path={"/reviews"} element={<ReviewsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
