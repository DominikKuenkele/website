import { carrer, education, projects } from "../data";
import styles from '../styles/Main.module.scss';
import Section from "./Section";

function Main() {
    return (
        <div className={styles.main + ' column'}>
            <div className={styles.list + ' scrollable'}>
                <Section name='Projects' items={projects} />
                <Section name='Education' items={education} />
                <Section name='Career' items={carrer} />
            </div>
        </div>
    );
}

export default Main;