import { useState } from 'react';
import Layout from '../components/Layout.jsx'

export default function Estado(props) {

    const [numero,setNumero] = useState(1)

    function incrementar() {
       
        setNumero(numero + 1)
    }

    return(
        <Layout titulo = "Componente com Estado">
            <h2>Nùmero {numero}</h2>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}