import styles from '../styles/Item.module.scss';
import { HoveredSection, PreviewElement, Sections } from './App';

interface ItemProps {
    section: Sections,
    id: number
    date: string,
    title: string,
    description: string
    changeSection: (section: Sections) => void
    hoverSection: (hoveredSection: HoveredSection) => void
    setPreview: (previewElement: PreviewElement) => void
}

function Item(props: ItemProps) {
    const handleMouseEnter = () => {
        props.hoverSection({ section: props.section, on: true })
    };

    const handleMouseLeave = () => {
        props.hoverSection({ section: props.section, on: false })
    };

    const handleMouseDown = () => {
        props.changeSection(props.section)
        props.setPreview({ section: props.section, id: props.id })
        const previewPane = document.getElementById('preview');
        previewPane?.scrollIntoView()
    }

    return (
        <div
            className={styles.item}
            data-date={props.date}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
        >
            <h3 className={styles.entry_title}>{props.title}</h3>
            <p className={styles.entry_description}>{props.description}</p>
        </div>
    );
}

export default Item;