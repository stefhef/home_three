import {Layout} from "./components/Layout/Layout";
import {data} from "./constants/mock";
import {FirstPage} from "./pages/FirstPage/FirstPage";


export const App = () => {
    return <Layout>
        <FirstPage books={data} />
    </Layout>
}