/*
Replicaremos la consulta que creamos en el characters.jsarchivo y le cambiaremos el nombre a GET_SINGLE_CHARACTER. 
En lugar de buscar nombres, buscaremos IDs.

Buscamos IDs porque son únicos y queremos aleatorizar los caracteres que se elegirán una vez que un usuario no obtenga 
el carácter que está buscando.

randomNumber inicializa el estado a la Math.floorfunción que genera un número aleatorio entre 0 y 199 inclusive, 
usando el Math.random()método y multiplicándolo por 200.

La Math.floor función redondea el resultado de la expresión al entero más cercano. 
Cada vez que randomNumbernecesita actualizarse, la setRandomNumber función toma un nuevo valor como argumento 
y actualiza el estado.

Tenemos un mensaje para alertar al usuario de que no se encuentra el personaje que está buscando, 
pero puede consultar un nuevo personaje.

La rueda de carga también se implementa en este componente, y los errores están ahí en caso de que ocurra algún problema. 
Las imágenes y las tarjetas son similares al characters.js formato ya que queremos coherencia con el aspecto de todo.
*/

import { useQuery } from "@apollo/client";
import { GET_SINGLE_CHARACTER } from "./helpers";
import { useState } from "react";
import "./App.css";

export const RandomCharacter = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 200)
  );
  const { loading, error, data } = useQuery(GET_SINGLE_CHARACTER, {
    variables: { id: randomNumber },
  });

  return (
    <div>
      <p className="intro">
        Sorry, we could not find that character 😞
        <br />
        <br />
        How about this one instead? 😉{" "}
      </p>

      {/* {loading && <p>loading...</p>} */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {error && <p> error </p>}

      {data && (
        <>
          <div
            className="card"
            key={data.character.name}
            style={{
              backgroundImage: `url(${data.character.image})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="info">
              <h2 className="h3">{data.character.name}</h2>
              <p>Status: {data.character.status}</p>
              <p>Species: {data.character.species}</p>
              <p>Type: {data.character.type}</p>
              <p>Gender: {data.character.gender}</p>
              <p>Origin: {data.character.origin.name}</p>
              <p>Location: {data.character.location.name}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
