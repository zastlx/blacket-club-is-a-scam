import styles from "../../styles";

export default function Center({ children }: { children: React.ReactNode }) {
    return <div className={styles.home.center}>{children}</div>;
}
