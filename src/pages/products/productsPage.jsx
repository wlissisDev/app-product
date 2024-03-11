import { Navbar } from '../../components/navbar/navbar';
import { Card } from '../../components/productCard/card';
import styles from './products.module.css';
export function ProductsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <Navbar />
                <div className={styles.list}>
                    <Card />
                    <Card />
                    <Card />
                    <Card/>
                    <Card />
                    <Card />
                    <Card />
                    <Card/>
                </div>
            </div>
        </div>
    )
}