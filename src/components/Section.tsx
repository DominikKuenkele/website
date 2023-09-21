import { ItemMeta } from "../data";
import styles from '../styles/Section.module.scss';
import { HoveredSection, PreviewElement, Sections } from './App';
import Item from "./Item";

interface SectionProps {
    name: string
    items: Array<ItemMeta>
    changeSection: (section: Sections) => void
    hoverSection: (hoveredSection: HoveredSection) => void
    setPreview: (previewElement: PreviewElement) => void
}


function Section(props: SectionProps) {
    return (
        <div className={styles.section}>
            <h2 id={props.name.toLowerCase()}>{props.name}</h2>
            <div className={styles.timeline} data-section={props.name.toLowerCase()}>
                {
                    props.items.map(
                        ({ date, title, description }, index) =>
                            <Item
                                section={props.name.toLowerCase() as Sections}
                                id={index}
                                date={date}
                                title={title}
                                description={description}
                                changeSection={props.changeSection}
                                hoverSection={props.hoverSection}
                                setPreview={props.setPreview}
                            />)
                }
            </div>
        </div>
    );
}

export default Section;