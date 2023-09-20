import styles from '../styles/Item.module.scss';

interface ItemProps {
    date: string,
    title: string,
    description: string
}

function Item(props: ItemProps) {
    return (
        <div className={styles.item} data-date={props.date}>
            <h3 className={styles.entry_title}>{props.title}</h3>
            <p className={styles.entry_description}>{props.description}</p>
        </div>
    );
}

export default Item;