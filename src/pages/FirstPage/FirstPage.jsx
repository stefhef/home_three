import {TypeList} from "../../components/TypeList/TypeList";
import {BooksList} from "../../components/BooksList/BooksList";

import styles from './style.module.css'
import {useState} from "react";

export const FirstPage = ({books}) => {
    const types = Array.from(new Set(books.map((book) => book.type)))
    const [selectedType, setSelectedType] = useState(0)
    return <main className={styles.main__firstPage}>
        <TypeList types={types} selectedTypes={selectedType} setSelectedTypes={setSelectedType}/>
        <BooksList books={books.filter((item) => {
            return item.type === types[selectedType]
        })}/>
    </main>
};