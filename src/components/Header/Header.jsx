import styles from './style.module.css';
import cart from '../../img/cart.png';


export const Header = () => {
    return <header className={styles.header}>
        <h2 className={styles.header__text}>Магазин</h2>
        <a href={'/cart'}>
            <img className={styles.header__cart} src={cart} alt={"Корзина"}/>
        </a>
    </header>
};