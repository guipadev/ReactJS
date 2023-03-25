import React, { Component } from "react";

function Login() {
  return (
    <div style={{backgroundColor: "blueviolet"}}>
      <h3>Login</h3>
      <p>Welcome a the session</p>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
      <p>Please initialization sessión</p>
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true, // Dependiendo de la condición se mostrara dicho componente
    };
  }
  render() {
    return (
      <div>
        <h2 style={{color: "blueviolet"}}>Renderizado Condicional</h2>
        <p>
          Si tengo cierto valor, ya se por paso de propiedades o en le manejo del estado renderizo un componente si no renderizo otro
        </p>
        <p>
          El renderizado es cuando el valor de un estado o propiedades cambian, y esto obliga que se vuelva a repintar la interface
        </p>

        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
