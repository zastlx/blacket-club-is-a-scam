import styles from "../styles";

export default function InfoContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.all.infoContainer}>{children}</div>;
}
