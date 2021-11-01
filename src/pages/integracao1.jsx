import { useState } from "react";
import Layout from "../components/Layout";
import styles from '../styles/integracao.module.css'

export default function Integracao() {

  const [codigo, setCodigo] = useState();
  const [cliente, setCliente] = useState({});

/*
  function obterCliente() {
    fetch("http://localhost:3000/api/clientes/"+codigo)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados));
  }
  */
  async function obterCliente() {
    const resp = await fetch("http://localhost:3000/api/clientes/"+codigo)
    const dados = await resp.json()
    setCliente(dados)
  }

  return (
    <Layout>
      <div>
          <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
          <button onClick={obterCliente}>Obter Cliente</button>
      </div>
      <div className={styles.integracao}>
      <ul>
        <li><b>Código:</b> {cliente.id}</li>
        <li><b>Nome: </b> {cliente.nome}</li>
      </ul>
      </div>
    </Layout>
  );
}
