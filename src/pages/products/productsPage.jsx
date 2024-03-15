import { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import { Card } from '../../components/productCard/card';
import styles from './products.module.css';
export function ProductsPage() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)

    function getProdutcs() {
        setIsLoading(true);
        fetch("https://api-product-qgu1.onrender.com/products")
            .then(response => response.json())
            .then(data => setData(data))
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        getProdutcs();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <Navbar />
                {
                    isLoading ?
                        <span style={{ color: "#000", fontSize: "25px", position: "absolute", top: "50%", left: "45%", fontWeight: "bold" }}>Carregando...</span>
                        :
                        <div className={styles.list}>
                            {
                                data?.map(item => {
                                    return (
                                        <Card
                                        getProdutcs={getProdutcs}
                                            key={item.id}
                                            name={item.name}
                                            description={item.description}
                                            value={item.value}
                                            img_url={item.img_url}
                                            id={item.id}
                                        />
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}