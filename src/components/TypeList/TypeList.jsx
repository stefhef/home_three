import styles from "./style.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { selectBooksTypes } from "../../store/book/selectors";
import { NavLink } from "react-router-dom";

export const TypeList = () => {
  const types = useSelector((state) => selectBooksTypes(state));
  return (
    <article className={styles.typeList}>
      {types &&
        types.map((type, index) => (
          <NavLink
            key={index}
            to={"/books/" + String(index)}
            className={({ isActive }) =>
              classnames(styles.typeList__button, {
                [styles.typeList__button_active]: isActive,
              })
            }
          >
            {type}
          </NavLink>
        ))}
    </article>
  );
};
