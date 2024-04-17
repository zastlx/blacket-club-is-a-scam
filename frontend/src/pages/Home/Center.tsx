import styles from "../../styles";

export default function Center({ children }: { children: React.ReactNode }) {
    return <form className={styles.home.center}>{children}</form>;
}
