import styles from "../FirstPage/style.module.css";
import {BookAnnotation} from "../../components/BookAnnotation/BookAnnotation";
import {Review} from "../../components/Review/Review";

export const ReviewsPage = ({books}) => {
    return <main className={styles.main__reviewPage}>
        <BookAnnotation book={books[0]} annotation={books[0].annotation} />
        {
            books[0].reviews.map((item) => <Review author={item.author} text={item.text} score={item.score} />)
        }
    </main>
}