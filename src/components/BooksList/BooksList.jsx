import {Book} from "../Book/Books";

export const BooksList = ({books}) => {
    return <article>
        <ul>
            {books.map((book) => <li>{<Book book={book}/>}</li>)}
        </ul>
    </article>
}