import Navegador from '../components/Navegador';

export default function Inicio() {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
      height:'100vh'      
    }}>      
      <Navegador destino="/estiloso" texto="Estiloso"></Navegador>
      <Navegador destino="/exemplo" texto="Exemplo"></Navegador>
      <Navegador destino="/jsx" texto="Jsx" cor="crimson"></Navegador>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"></Navegador>
      <Navegador destino="/cliente/sp1/123" texto="Navegação #02" cor="blue"></Navegador>
      <Navegador destino="/estado" texto="Estado #01" cor="blue"></Navegador>
      <Navegador destino="/integracao1" texto="Integração API #01" cor="blue"></Navegador>
    </div>
  );
}
