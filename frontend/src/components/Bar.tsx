import styles from "../styles";

export default function Bar() {
    return <div className={styles.all.bar}>
        <div className={styles.all.active}>
            <i className="fas fa-house" />
        </div>
    </div>;
}
