import styles from '../styles/Preview.module.scss';

interface PreviewProps {
    content: () => JSX.Element
}

function Preview(props: PreviewProps) {
    return (
        <div id="preview" className={styles.preview + " column scrollable"}>
            {props.content()}
        </div>
    );
}

export default Preview;