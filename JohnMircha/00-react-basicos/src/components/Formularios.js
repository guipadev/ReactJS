import React, { useState } from "react";

/* 
// Se asocia una variable de estado aún elemento del formulario
// No optimo para formularios grandes
export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
} */

export default function Formularios() {
  // Ejemplo con usa sola variable controla todos los estados del formulario
  const [form, setForm] = useState({}); // Se inicializa con un objeto vacio

  // Es la función que se asigna al evento onChange de todos los elementos del formulario 
  // que se desea vincular a a algunas de las propiedades del formulario 
  const handleChange = (e) => {
    setForm({
      // Mezclar el objeto que ya trae el formulario 
      // Se mezcla con la propiedad e.target.name
      // Si hay cambios se actualiza de acuerdo a e.target.value 
      // Así podriamos tener 1000 elementos del formulario con el mismo onChange y estar actualizando el estado objeto en una sola variable tipo objeto en este caso
      ...form, 
      [e.target.name]: e.target.value,
    });
  };

  // Para el checked se evalua diferente al ser booleano se cambia la condición e.target.checked
  // Para almacenas los valores booleanos
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h1>Formularios</h1>
      <h3>Controlados</h3>
      <p>Atraves de los "id" que se le ponga a los elementos del formulario. Es irlo manejando por medio de referencias, pero no es recomendado</p>
      <h3>No Controlados</h3>
      <p>Gestionados por el estado de tú componente</p>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          // Al estar los valores del formulario en un objeto, por ende la var seria form.nombre cuando son cajas de texto  
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select 
          name="lenguaje" 
          onChange={handleChange} 
          defaultValue=""
        >
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
