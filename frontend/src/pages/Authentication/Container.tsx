import styles from "../../styles";

export default function Container({ children }: { children: React.ReactNode }) {
    return <form className={styles.authentication.container}>{children}</form>;
}
