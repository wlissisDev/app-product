import { Link } from "react-router-dom";
import logo from '../../assets/logo.jfif';

import styles from './navbar.module.css';
export function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={logo} />
            <div className={styles.nav}>
                <Link className={styles.nav_item}>Cardápio</Link>
                <Link className={styles.nav_item}>Adicionar</Link>
            </div>
        </div>
    )
}