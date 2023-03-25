import logo from "../logo.svg";
import Componente from "./Componente";
import Propiedades from "./Propiedades";

const Inicio = () => {
  let nombre = "NombrePrueba";
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />

            <a
              className="App-link"
              href="https://reactjs.org"
              Target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h3>Ejemplo de la sintaxis JSX</h3>
            <p>{nombre}</p>
            <p>
              La suma:
              {2 + 1}
            </p>
            <p>{auth ? "Usuario logueado" : "Ningun usuario logueado"}</p>
            <ul>
              {estaciones.map((elemento, index) => (
                <li key={index}>{elemento}</li>
              ))}
            </ul>
          </section>
          <section>
            <Componente msg="Hola soy un Componente Funcional Expresado desde una prop" />
            <hr />
            <Propiedades
              cadena="Esto es una cadena de texto"
              numero={19}
              booleano={true}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "Jon", correo: "jonmircha@gmail.com" }}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={
                <Componente msg="Soy un componente pasado como Prop" />
              }
            />
          </section>
        </header>
      </div>
    </>
  );
};

export default Inicio;
