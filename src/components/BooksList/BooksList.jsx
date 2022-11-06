import {Book} from "../Book/Books";
import {memo} from "react";

import styles from './style.module.css';

export const BooksList = memo(function ({books}) {
    return <article className={styles.booksList}>
        {books.map((book) => <Book counterPlace={'main'} key={book.id} book={book}/>)}
    </article>
});