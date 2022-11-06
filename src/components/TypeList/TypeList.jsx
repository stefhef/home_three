import styles from './style.module.css';
import classnames from 'classnames';

export const TypeList = ({types, selectedTypes, setSelectedTypes}) => {
    return <article className={styles.typeList}>
        {
            types.map((type, index) => <button key={index + type}
                                               className={classnames(styles.typeList__button, selectedTypes === index ? styles.typeList__button_active : null)}
                                               onClick={() => setSelectedTypes(index)}>{type}</button>)
        }
    </article>
};