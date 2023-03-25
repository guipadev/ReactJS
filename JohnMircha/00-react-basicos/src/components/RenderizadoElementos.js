import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} Target="_blank" style={{color: "orange"}}>
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <p>
          En React puedes crear distintos componentes que encapsulan el comportamiento que necesitas. 
          Entonces puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación</p>
        <p>
          El renderizado condicional en React funciona de la misma forma que lo hace las condiciones en JavaScript. 
          Puedes usar el condicional <strong>if</strong> o el <strong>operador ternario</strong> para crear elementos dinamicamente en base al valor del estado o las propiedades que recibe el componente        
        </p>
        <h3>Estaciones del Año</h3>
        <ol>
          {
            this.state.seasons.map((el, index) => (
              <li key={index}>{el}</li>
            ))
          }
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <p>Extrayendo datos de la simulación de un API</p>
        <ul>
          {
            data.frameworks.map((el) => (
              <ElementoLista key={el.id} el={el} />
            ))
          }
        </ul>
      </div>
    );
  }
}
