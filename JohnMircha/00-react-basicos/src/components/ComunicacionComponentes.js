import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h1>Comunicación entre Componentes</h1>
        <p>Tenemos 3 casos de comunicación entre los componentes de React:</p>
        <ul>
          <li>Comunicación entre un componente padre a uno hijo.</li>
          <li>Comunicación entre un componente hijo y su padre.</li>
          <li>Comunicación entre componentes no relacionados.</li>
        </ul>
        <a 
          href="https://jonmircha.com/react#comunicaci%C3%B3n-entre-componentes" 
          Target="_blank">
          Más información Aquí
        </a>
        <br/><br/>
        <h3>
          Contador <b style={{color: "tomato"}}>{this.state.contador}</b>
        </h3>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button 
        onClick={props.incrementarContador}
        className="btn btn-info"
      >
        +
      </button>
    </>
  );
}
