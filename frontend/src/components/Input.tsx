import styles from "../styles";

export default function Input({ icon, ...props }: {
    icon?: string;
    [key: string]: unknown;

}) {
    return (
        <div className={styles.all.inputContainer}>
            {icon && <i className={icon} />}
            <input data-icon={!!icon} {...props} />
        </div>
    );
}
