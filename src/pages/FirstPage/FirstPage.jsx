import {TypeList} from "../../components/TypeList/TypeList";
import {BooksList} from "../../components/BooksList/BooksList";

import styles from './style.module.css'
import {useState} from "react";

export const FirstPage = (props) => {
    const types = Array.from(new Set(props.books.map((book) => book.type)))
    const [selectedType, setSelectedType] = useState(0)
    return <main className={styles.main}>
        <TypeList types={types} selectedTypes={selectedType} setSelectedTypes={setSelectedType}/>
        <BooksList books={props.books.filter((item) => {return item.type === types[selectedType]})}/>
    </main>
};