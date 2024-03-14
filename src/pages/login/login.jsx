import { useContext, useState } from "react"
import { Context } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom";

import styles from './login.module.css'

export function Login() {
    const { SignIn, Logout } = useContext(Context)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        SignIn(username, password);
        const authUser = JSON.parse(localStorage.getItem("authUser"));
        authUser.auth ? navigate("/") : ""
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Login</h1>
                <p>Entre com username: admin e senha: admin</p>
                <div className={styles.input}>
                    <label>Usuário</label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>

                <div className={styles.input}>
                    <label>Senha</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button type="submit">Entrar</button>
                <Link to="/" className={styles.link} >Voltar para página de produtos</Link>
            </form>
        </div>
    )
}