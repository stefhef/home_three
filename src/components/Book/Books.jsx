import {useState} from "react";
import {BookButtons} from "../BookButtons/BookButtons";

import styles from './style.module.css'


export const Book = ({book, counterPlace}) => {
    const [count, setCount] = useState(0)
    return <article className={styles.books}>
        <div>
            <h2 className={styles.books__book_title}>{book.title}</h2>
            <p className={styles.books__book_text}>{book.author}</p>
            <p className={styles.books__book_text}>{book.genre}</p>
            <h2 className={styles.books__book_price}>{book.price} ₽</h2>
        </div>
        <BookButtons place={counterPlace} count={count} setCount={setCount}/>
    </article>
}