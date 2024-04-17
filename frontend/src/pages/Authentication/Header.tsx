import styles from "../../styles/";

export default function Header({ children }: { children: React.ReactNode }) {
    return <div className={styles.authentication.containerHeader}>{children}</div>;
}
