import {Header} from "../Header/Header";

import styles from './style.module.css'


export const Layout = (props) => {
    return <div className={styles.layout}>
        <Header/>
        {props.children}
    </div>
}