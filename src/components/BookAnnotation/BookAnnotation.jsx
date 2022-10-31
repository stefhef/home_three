import styles from "./style.module.css";
import {Book} from "../Book/Books";
import {Annotation} from "../Annotation/Annotation";

export const BookAnnotation = ({book, annotation}) => {
    return <div className={styles.bookAnnotation}>
        <Book counterPlace={'reviews'} book={book}/>
        <Annotation annotation={annotation}/>
    </div>
}