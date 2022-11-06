import {data} from "./constants/mock";
import {FirstPage} from "./pages/FirstPage/FirstPage";
import {ReviewsPage} from "./pages/ReviewsPage/ReviewsPage";
import {Header} from "./components/Header/Header";


export const App = () => {
    return <div>
        <Header/>
        <FirstPage books={data.map((book) => (book))}/>
        {/*<ReviewsPage books={data.map((book) => book)}/>*/}
    </div>
};