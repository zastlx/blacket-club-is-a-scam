import styles from "../styles";

export default function HeaderBody({ children }: { children: React.ReactNode }) {
    return <div className={styles.all.headerBody}>{children}</div>;
}
