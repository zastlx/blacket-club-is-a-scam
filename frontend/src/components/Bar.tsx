import { Link } from "react-router-dom";
import styles from "../styles";

export default function Bar() {
    return <div className={styles.all.bar}>
        <Link to="/"><i className="fas fa-house" /></Link>
        <Link to="/settings"><i className="fas fa-cog" /></Link>
    </div>;
}
