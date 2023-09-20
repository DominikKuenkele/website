import { ItemData } from "../data";
import styles from '../styles/Section.module.scss';
import Item from "./Item";

interface SectionProps {
    name: string
    items: Array<ItemData>
}

function Section(props: SectionProps) {
    return (
        <div className={styles.section}>
            <h2 id={props.name.toLowerCase()}>{props.name}</h2>
            <div className={styles.timeline} data-section={props.name.toLowerCase()}>
                {
                    props.items.map(
                        ({ date, title, description }) => <Item date={date} title={title} description={description} />)
                }
            </div>
        </div>
    );
}

export default Section;