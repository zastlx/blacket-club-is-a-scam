import styles from "../../styles";

export default function SubmitButton({ children, ...props }: { children: React.ReactNode;[key: string]: unknown; }) {
    return <div className={styles.authentication.button} {...props}>{children}</div>;
}
