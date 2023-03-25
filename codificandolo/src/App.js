import { Link } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/component_firebase/Menu";
import { CrudUsuarios } from "./components/CrudUsuarios";
import { EstadoUseState } from "./components/EstadoUseState";
import { EventoOnChange } from "./components/EventoOnChange";
import { EventoSaludo } from "./components/EventoSaludo";
import { Hello } from "./components/Hello";
import { JSX } from "./components/JSX";
import { ListarDatosConMap } from "./components/ListarDatosConMap";
import { PROPS } from "./components/PROPS";

function App() {
  const datos = [
    {
      nombre: "Manuel",
      edad: 37,
      id: 1,
    },
    {
      nombre: "Lina",
      edad: 30,
      id: 2,
    },
    {
      nombre: "Marcos",
      edad: 23,
      id: 3,
    },
    {
      nombre: "Manuela",
      edad: 7,
      id: 4,
    },
  ];

  return (
    <div className="container">
      <div>
        <h1>Primer componente</h1>
        <Hello />
        <h1>JSX en React</h1>
        <p>
          Es utilizada para no separar la lógica de la programación de la
          interfaz
        </p>
        <JSX />
        <h1>Propiedades de los componentes PROPS</h1>
        <PROPS saludo="Hola soy un saludo desde utilizando props" edad="37" />
        <PROPS
          saludo="Hola soy un segundo saludo utilizando props"
          edad="46 "
        />
        <h1>Evento onClick</h1>
        <EventoSaludo />
        <h1>Evento onChange</h1>
        <EventoOnChange />
        <h1>Estado o useState</h1>
        <EstadoUseState />
        <h1>Listar Datos con Map</h1>
        <ListarDatosConMap datos={datos} />
      </div>
      <div>
        <h1>CRUD</h1>
        <CrudUsuarios />
      </div>
      <div>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/ejemplo">Ir a ruta de ejemplo</Link> |{" "}
          <Link to="/usuarios">Ruta consumo API con Axios</Link> |{" "}
          <Link to="/blog">Ruta consumo API con Fetch</Link> |{" "}
          <Link to="/inicio">Ejemplo FireBase Autenticación</Link> |{" "}
        </nav>
      </div>
      <div>
        <Menu />
      </div>
      
    </div>
  );
}

export default App;
