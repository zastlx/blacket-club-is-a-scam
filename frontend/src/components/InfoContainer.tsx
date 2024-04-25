import styles from "../styles";

export default function InfoContainer({ children }: { children: React.ReactNode }) {
    return <form className={styles.all.infoContainer}>{children}</form>;
}
