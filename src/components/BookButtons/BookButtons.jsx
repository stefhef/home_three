import styles from "./style.module.css";

export const BookButtons = ({count, setCount, place}) => {
    return <section className={place === 'main' ? styles.bookButtons : styles.bookButtons_reviews}>
        <button className={count > 0 ? styles.bookButtons__button : styles.bookButtons__button_disable} onClick={() => setCount(count - 1)} disabled={count === 0}><p className={styles.bookButtons__text}>&mdash;</p></button>
        <p className={count === 0 ? styles.bookButtons__text_count_disabled : styles.bookButtons__text_count}>{count}</p>
        <button className={styles.bookButtons__button} onClick={() => setCount(count + 1)}><p className={styles.bookButtons__text}>+</p></button>
    </section>
}