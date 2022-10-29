import {TypeList} from "../../components/TypeList/TypeList";
import {BooksList} from "../../components/BooksList/BooksList";

export const FirstPage = (props) => {
    const types = props.books.map((book) => book.type)
    return <main>
        <TypeList types={types}/>
        <BooksList books={props.books}/>
    </main>
};