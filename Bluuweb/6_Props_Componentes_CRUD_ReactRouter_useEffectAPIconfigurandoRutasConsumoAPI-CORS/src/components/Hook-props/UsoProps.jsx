import Saludo from "./Saludo";
import Comentario from "./Comentario";
import Boton from "./Boton/Boton";
import BotonProps from "./BotonProps/BotonProps";

function UsoProps() {

  const sujeto = {
    nombre: 'Pedrito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Probando los props de ReactJs, Reack Hocks...'
  }

  const datosBoton = {
    clase: 'danger',
    link: 'https://via.placeholder.com/64',
    mpmbre: 'Inicio Rápido'
  }

  return (
    <div className="container mt-2">
      <h1>components</h1>
      <Saludo persona="Juanito" />
      <Saludo persona="Ignacio" />
      <Saludo persona="Catalina" />
      <Comentario sujeto={sujeto}/> 
      <Boton boton="consultar" clase="btn-consulta" />
      <br/><br/>
      <Boton boton="volver a inicio del tramite" clase="btn-inicio" />
      <br/><br/>
      <BotonProps palabra={datosBoton}/>
    </div>
  );
}

export default UsoProps;
