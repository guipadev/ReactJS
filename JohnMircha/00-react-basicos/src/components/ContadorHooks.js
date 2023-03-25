import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);
  //console.log(useState());

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  return (
    <>
      <h1>Hooks - useState</h1>
      <nav>
        <button onClick={sumar} className="btn btn-warning">+</button> {" "}
        <button onClick={restar} className="btn btn-danger">-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
      <input type="text" />
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
