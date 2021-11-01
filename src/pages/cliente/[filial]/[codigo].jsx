import Layout from '../../../components/Layout'
import {useRouter} from 'next/router'

export default function ClientePorCodigo(props) {
    const router = useRouter();
    return(
        <Layout titulo="Navegação Dinâmica">
            <h2>Código = {router.query.codigo}</h2>
            <h2>Filial = {router.query.filial}</h2>
        </Layout>
    )
}