import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h3 style={{color: "yellow"}}>Propiedades obtenidas por defecto</h3>
      <h4>{props.porDefecto}</h4>
      <ul>
        <h3 style={{color: "yellow"}}>Cadena de texto</h3>
        <li>{props.cadena}</li>
        
        <h3 style={{color: "yellow"}}>Pasando una propiedad número, utiliza prop-types, obligación requerida de tipado</h3>
        <li>{props.numero}</li>
        
        <h3 style={{color: "yellow"}}>Pasando Propiedades Boolean</h3>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        
        <h3 style={{color: "yellow"}}>Propiedades obtenidas por defecto</h3>
        <li>{props.arreglo.join(", ")}</li>
        
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        
        <h3 style={{color: "yellow"}}>Función pasada como Propiedad</h3>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        
        <h3 style={{color: "yellow"}}>Un elemento React pasado como Propiedad</h3>
        <li>{props.elementoReact}</li>

        <h3 style={{color: "yellow"}}>Un componente React pasado como Propiedad</h3>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props... obtenido por defecto",
};

// Instalar npm i -S props-type
// Que permiten definir que estas caracteristicas sean obligatorias en la propiedad
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
