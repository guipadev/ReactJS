import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("Moviendo el Scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      //console.log("Fase de Desmontaje");
    };
  }, [scrollY]); // Solo cuando scroll tenga cambios

  useEffect(() => {
    //console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    //console.log("Fase de Actualización");
  });

  useEffect(() => {
    return () => {
      //console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h1>Hooks - useEffect y el Ciclo de Vida</h1>
      <h4>Debe poder visualizarse el scroll, aumente la página y vera 😁</h4>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
