import styles from '../styles/Header.module.scss';
import { PreviewElement, Sections } from "./App";

interface HeaderProps {
    changeSection: (section: Sections) => void
    setPreview: (previewElement: PreviewElement) => void
}

function Header(props: HeaderProps) {
    const handleMouseDown = () => {
        props.changeSection(Sections.Home)
        props.setPreview({ section: Sections.Home, id: 0 })
    }

    return (
        <div className="header">
            <div className={styles.menu}>
                <a href="#home" className="active" onMouseDown={handleMouseDown}>Home</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#career">Career</a>
            </div>
        </div>
    );
}

export default Header;