import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      //console.log("Fase de Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h1>Reloj con Hooks</h1>
      <p>
      como usar el Hook useEffect en React y como pasar la programación de un componente de clase a uno funcional
      </p>
      {
        visible && <Reloj hora={hora} />
      }
      <button 
        onClick={() => setVisible(true)}
        className="btn btn-dark"
      >
        Iniciar
      </button> {" "}
      <button 
        onClick={() => setVisible(false)}
        className="btn btn-info"
      >
        Detener
      </button>
    </>
  );
}
