import {Book} from "../Book/Books";

import styles from './style.module.css';

export const BooksList = ({books}) => {
    return <article className={styles.booksList}>
            {books.map((book) => <Book book={book}/>)}
    </article>
}