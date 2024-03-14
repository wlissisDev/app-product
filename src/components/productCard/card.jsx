import { Link } from "react-router-dom";
import logo from '../../assets/logo.jfif';

import img from '../../assets/background-pizza.jfif'
import styles from './card.module.css';
export function Card() {
    const authUser = JSON.parse(localStorage.getItem("authUser"));

    return (
        <div className={styles.card}>
            <img src={img} />
            <div className={styles.info}>
                <h2>Nome</h2>
                <p>Descrição do produto ...</p>
                <span>Preço: R$ 00,00</span>
                {
                    authUser ?
                        <div className={styles.admin_btns}>
                            <button>Deletar</button>
                            <button>Editar</button>
                        </div>
                        :
                        <button>Comprar</button>
                }

            </div>
        </div>
    )
}