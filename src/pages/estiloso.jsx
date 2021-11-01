import styles from '../styles/Estiloso.module.css'
import Link from 'next/link';
import Layout from '../components/Layout'

export default function Estiloso(params) {
    return (
        <Layout titulo="Exemplo CSS Modularizado">
        <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
        </Layout>
    )    
}