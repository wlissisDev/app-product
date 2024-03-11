import { Link } from "react-router-dom";
import logo from '../../assets/logo.jfif';

import img from '../../assets/background-pizza.jfif'
import styles from './card.module.css';
export function Card() {
    return (
        <div className={styles.card}>
           <img src={img} />
           <div className={styles.info}>
            <h2>Nome</h2>
            <p>Descrição do produto ...</p>
            <span>Preço: R$ 00,00</span>
            <button>Comprar</button>
           </div>
        </div>
    )
}