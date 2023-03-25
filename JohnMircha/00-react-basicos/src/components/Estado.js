/* ESTADO
3 caracteristicas importantes
- Es inmutable
- No se puede modificar directamente
- Es asincrono

state
Para hacer cambios setState

la propagación es unidireccional y descendiente
componentes padres pasan valores de su estado a los hijos
*/

import React, { Component } from "react";

// Obteniendo la propiedad de estado del padre
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    /* 
      //Ir actualizando el estado
      setInterval(() => {
      //this.state.contador += 1;
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000); */
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}
