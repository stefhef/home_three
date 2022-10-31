import {Layout} from "./components/Layout/Layout";
import {data} from "./constants/mock_tip";
import {FirstPage} from "./pages/FirstPage/FirstPage";
import {ReviewsPage} from "./pages/ReviewsPage/ReviewsPage";


export const App = () => {
    return <Layout>
        <FirstPage books={data} />
        {/*<ReviewsPage books={data.map((book) => book)}/>*/}
    </Layout>
}