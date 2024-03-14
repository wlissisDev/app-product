import { Link } from 'react-router-dom';
import styles from './home.module.css';

export function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
            <h1>Cadastrar novo produto</h1>
                <form>
                    <div>
                        <label>Link da imagem</label>
                        <input required type="text"  placeholder='cole aqui a url da imagem'/>
                    </div>
                    <div>
                        <label>Nome</label>
                        <input required type="text" placeholder='Digite o nome do produto' />
                    </div>
                    <div>
                        <label>Descrição</label>
                        <input required type="text" placeholder='Informações adicionais' />
                    </div>
                    <div>
                        <label>Valor R$</label>
                        <input required type="number" min={0} placeholder='informe o preço do produto'/>
                    </div>
                    <button type='submit'>Adicionar</button>
                </form>
                <Link to="/" className={styles.link}>Voltar para página de produtos</Link>
            </div>
        </div>
    )
}