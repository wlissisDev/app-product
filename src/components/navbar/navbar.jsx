import { Link,useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jfif';

import styles from './navbar.module.css';
import { useContext } from "react";
import { Context } from "../../context/AuthContext";


export function Navbar({setLogout,logout}) {

    const authUser = JSON.parse(localStorage.getItem("authUser"));
    const {Logout} = useContext(Context)
    const navigate = useNavigate()
    function handleLogout(){
        Logout()
        navigate("/")
        setLogout(!logout)
    }
    return (
        <div className={styles.navbar}>
            <img src={logo} />
            <div className={styles.nav}>
                {/* <Link className={styles.nav_item}>Cardápio</Link> */}
                <Link to="login" className={styles.nav_item}>Login</Link>
                {authUser ?  <button 
                className={styles.nav_btn}
                onClick={handleLogout}
                >Sair</button>:""}
                {authUser ?  <Link to="adicionar" className={styles.nav_add}>Adicionar produto</Link>:""}
                
            </div>
        </div>
    )
}