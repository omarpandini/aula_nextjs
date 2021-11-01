import Link from "next/link"
import Styles from "../styles/Layout.module.css"

export default function Layout(props) {
    console.log(props);
    return(
        <div className={Styles.layout}>

            <div className={Styles.cabecalho}>
                <h1>{props.titulo ?? "Mais um Exemplo"}</h1>
                <Link href="/">Voltar</Link>
            </div>

            <div className={Styles.conteudo}>
                {props.children}
            </div>           
        </div>
    )
}