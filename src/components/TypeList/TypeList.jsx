import styles from "./style.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { selectActiveType, selectBooksTypes } from "../../store/book/selectors";
import { Link } from "react-router-dom";

export const TypeList = () => {
  const types = useSelector((state) => selectBooksTypes(state));
  console.log(`types: ${types}`);
  const selectedType = useSelector((state) => selectActiveType(state));
  console.log(`ST: ${selectedType}`);
  return (
    <article className={styles.typeList}>
      {types.map((type, index) => (
        <Link
          key={index}
          to={"/books/" + String(index)}
          className={classnames(
            styles.typeList__button,
            selectedType === index ? styles.typeList__button_active : null
          )}
        >
          {type}
        </Link>
      ))}
    </article>
  );
};
