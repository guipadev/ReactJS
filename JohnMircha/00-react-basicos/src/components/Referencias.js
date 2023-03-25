import React, { createRef, useRef } from "react";

export default function Referencias() {
  //let refMenu = createRef(),
  let refMenu = useRef(),
      refMenuBtn = useRef();

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    /* 
    //Sin referencia 
    const $menu = document.getElementById("menu");

    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    } 
    */

    // Uso de referencia
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h1>Referencias</h1>
      <p>
        Es la manera en que nos permite React, poder controlar un elemento que ya ha sido cargado al DOM
      </p>
      <p>
        Ejemplo un menu 🍔 se podria estar ocultando/mostrando con variable de "estado" como true y false,
        pero esto estaria renderizando el elemento cada vez cuando se ejecuta esta acción
      </p>
      <p>
        Aplicando estilos CSS se podria mejorar hacer esta acción con display none etc...
      </p>
      <p>
        Pero con las <strong>REFERENCIAS</strong> nos permite elegir el elemento que ya esta en el DOM, 
        y poder trabajar con el, sin el renderizado que hace las variables de estado
      </p>
      <p>
        Las <strong>referencias</strong> estan para que no utilices la manipulación del DOM con getElementById, querySelector...
      </p>
      <p>
        Si trabajas con class component se debe utilizar <strong>createRef</strong> para crear la variable de referencia
      </p>
      <p>
        Si trabajas con hooks se debe utilizar <strong>useRef</strong> para crear la variable de referencia
      </p>
      <a href="https://es.reactjs.org/docs/refs-and-the-dom.html" Target="_blank">
        Documentación oficial sobre referencias
      </a>
      <br/>
      <br/>
      <button 
        id="menu-btn" 
        className="btn btn-info"
        ref={refMenuBtn} 
        onClick={handleToggleMenu}
      >
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#a">Sección 1</a>
        <br />
        <a href="#a">Sección 2</a>
        <br />
        <a href="#a">Sección 3</a>
        <br />
        <a href="#a">Sección 4</a>
        <br />
        <a href="#a">Sección 5</a>
      </nav>
    </>
  );
}
