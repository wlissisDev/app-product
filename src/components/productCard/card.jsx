import { Link } from "react-router-dom";
import logo from '../../assets/logo.jfif';

import img from '../../assets/background-pizza.jfif'
import styles from './card.module.css';

export function Card({ name, description, value, img_url, id,getProdutcs }) {

    const authUser = JSON.parse(localStorage.getItem("authUser"));

    function deleteProduct(id){
        fetch(`${process.env.URL}${id}`,{
            method:"DELETE",
            headers:{"Content-Type": "application/json"}
        })
        .then(()=>alert("item deletado com sucesso"))
        .finally(()=>getProdutcs());
    }

    return (
        <div className={styles.card}>
            <img src={img_url} />
            <div className={styles.info}>
                <h2>{name}</h2>
                <p>{description}</p>
                <span>Preço: R$ {value},00</span>
                {
                    authUser ?
                        <div className={styles.admin_btns}>
                            <button onClick={()=>deleteProduct(id)}>Deletar</button>
                            <button>Editar</button>
                        </div>
                        :
                        <button>Comprar</button>
                }

            </div>
        </div>
    )
}