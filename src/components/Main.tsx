import { ItemMeta } from '../data';
import styles from '../styles/Main.module.scss';
import { HoveredSection, PreviewElement, Sections } from "./App";
import Section from "./Section";

interface MainProps {
    projects: Array<ItemMeta>
    education: Array<ItemMeta>
    career: Array<ItemMeta>
    changeSection: (section: Sections) => void
    hoverSection: (hoveredSection: HoveredSection) => void
    setPreview: (previewElement: PreviewElement) => void
}

function Main(props: MainProps) {
    return (
        <div className={styles.main + ' column'}>
            <div className={styles.list + ' scrollable'}>
                <div id='home'></div>
                <Section
                    name='Projects'
                    items={props.projects}
                    changeSection={props.changeSection}
                    hoverSection={props.hoverSection}
                    setPreview={props.setPreview}
                />
                <Section
                    name='Education'
                    items={props.education}
                    changeSection={props.changeSection}
                    hoverSection={props.hoverSection}
                    setPreview={props.setPreview}
                />
                <Section
                    name='Career'
                    items={props.career}
                    changeSection={props.changeSection}
                    hoverSection={props.hoverSection}
                    setPreview={props.setPreview}
                />
            </div>
        </div>
    );
}

export default Main;