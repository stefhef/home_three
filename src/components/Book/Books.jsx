import {useState} from "react";

import styles from './style.module.css'


export const Book = ({book}) => {
    console.log(book)
    const [count, setCount] = useState(0)
    return <article>
        <div>
            <h2 className={styles.book__title}>{book.title}</h2>
            <h3>{book.author}</h3>
            <h3>{book.genre}</h3>
            <h2 className={styles.book_price}>{book.price} ₽</h2>
        </div>
        <div>
            <section>
                <button className={count > 0 ? styles.book__button : styles.book__button_disable}>-</button>
                {count}
                <button className={styles.book__button}>+</button>
            </section>
        </div>
    </article>
}