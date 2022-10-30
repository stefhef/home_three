import styles from './style.module.css';

export const Review = ({author, score, text}) => {
    return <section className={styles.review}>
        <div className={styles.review__top}>
            <h2>{author}</h2>
            <p>{score}</p>
        </div>
        <p>{text}></p>
    </section>
}