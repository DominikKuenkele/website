import image from '../images/dominik.jpg';
import styles from '../styles/Preview.module.scss';

function Preview() {
    return (
        <div className={styles.preview + " column scrollable"}>
            <div>
                <img src={image} alt="" width="70%" />
                <p>I am Dominik Künkele.</p>
                <p>Computational Linguist and Developer</p>
            </div>
        </div>
    );
}

export default Preview;