import styles from "./style.module.css";
import cart from "../../img/cart.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/books/0"} className={styles.header__link}>
        <h2 className={styles.header__text}>Магазин</h2>
      </Link>
      <a href={"/cart"}>
        <img className={styles.header__cart} src={cart} alt={"Корзина"} />
      </a>
    </header>
  );
};
