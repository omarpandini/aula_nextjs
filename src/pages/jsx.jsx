import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css";

export default function Jsx() {
  const a = 5;
  const b = 10;
  const titulo = <h1>JSX é um conceito Central</h1>;

  function subtitulo(params) {
    return (
      <div>
        <h2> Subítulo: {params} </h2>
      </div>
    );
  }

  return (
    <Layout titulo="Exemplo JSX">
      <div className={styles.roxo}>
        {titulo}
        {subtitulo("opaaa")}
        {subtitulo("opaaa 2")}
        <h3>
          Valor a {a} valor b {b} total {a + b}
        </h3>
      </div>
    </Layout>
  );
}
