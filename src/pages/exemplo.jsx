import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css"

export default function Exemplo() {
  return (
    <Layout titulo="Exemplo Usando Componente">
      <div className={styles.roxo}>
        <Cabecalho titulo="Next.js e React" />
        <Cabecalho titulo="Aprendendo" />
      </div>
    </Layout>
  );
}
