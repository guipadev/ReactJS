import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos u Binding en Componentes de Clase ES6</h2>
        <p>Similar a JavaScript en manejar el DOM</p>
        <p>Los eventos se nombra usando camelCase en vez de minuscula</p>
        <p>Con JSX para una función como manejador del evento en vez de un string</p>
        
        <nav>
          <button 
            onClick={this.sumar}
            className="btn btn-primary"  
          >
            +
          </button>
          <button 
            onClick={this.restar}
            className="btn btn-danger"
          >
              -
          </button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow  functions
  sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <p>Eventos & Property Initializers</p>
        <p>Uso de Arrow  functions</p>
        <nav>
          <button onClick={this.sumar} className="btn btn-primary">+</button>
          <button onClick={this.restar} className="btn btn-danger">-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
} */

/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>
); */

// Boton que deberia estar en archivo aparte
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        <p>
          Eventos sintéticos, nativos y personalizados en React, además pasar parámetros en los manejadores de eventos
        </p>
        <p>Validación comportamiento en consola</p>

        <a
          className="App-link"
          href="https://es.reactjs.org/docs/events.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link eventos soportados por React
        </a>
        
        <br/><br/>

        <button
          className="btn btn-success"
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
