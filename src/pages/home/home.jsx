import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { useState } from 'react';

export function Home() {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [img_url, setImg_url] = useState()

    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true)
        await fetch(`${process.env.URL}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, value: price, img_url })

        })
            .then(() => setIsLoading(false));

    }

    return (
        <div className={styles.container}>
            {
                isLoading ?
                    <span>Adicionando produto...</span>
                    :
                    <div className={styles.content}>
                        <h1>Cadastrar novo produto</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Link da imagem</label>
                                <input
                                    type="text"
                                    placeholder='cole aqui a url da imagem'
                                    onChange={(e) => setImg_url(e.target.value)}
                                // value={img_url}
                                />
                            </div>
                            <div>
                                <label>Nome</label>
                                <input

                                    type="text"
                                    placeholder='Digite o nome do produto'
                                    onChange={(e) => setName(e.target.value)}
                                // value={name}
                                />
                            </div>
                            <div>
                                <label>Descrição</label>
                                <input

                                    type="text"
                                    placeholder='Informações adicionais'
                                    onChange={(e) => setDescription(e.target.value)}
                                // value={description}
                                />
                            </div>
                            <div>
                                <label>Valor R$</label>
                                <input

                                    type="number"
                                    min={0}
                                    placeholder='informe o preço do produto'
                                    onChange={(e) => setPrice(e.target.value)}
                                // value={price}
                                />
                            </div>
                            <button type='submit'>Adicionar</button>
                            <Link to="/" className={styles.link}>Voltar para página de produtos</Link>
                        </form>
                    </div>
            }
        </div>
    )
}