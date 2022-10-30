import styles from './style.module.css'

export const Annotation = ({annotation}) => {
    return <article className={styles.bookAnnotation__text}>
        <h3>Аннотация</h3>
        <p>{annotation}</p>
    </article>
}