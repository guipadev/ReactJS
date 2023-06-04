/**
 * En el código anterior, importamos gqldesde el @apollo/clientpara definir nuestra consulta.
 * Creamos y exportamos la variable GET_CHARACTERScomo una cadena con letras mayúsculas.
 * El uso de mayúsculas se considera una práctica recomendada al definir consultas en GraphQL.
 * También se considera una buena práctica envolver cadenas con un literal de plantilla.
 *
 * Los objetos en Javascript son colecciones o contenedores llenos de pares clave-valor.
 * Un par clave-valor se denomina propiedad.
 *
 * La consulta, en nuestro caso, busca los personajes de Rick and Morty.
 * Devuelve un objeto con la resultspropiedad, que es una matriz de objetos de caracteres.
 *
 * Cada personaje tiene propiedades como nombre, especie, estado, tipo, género e imagen;
 * puedes elegir lo que quieres obtener 😉.
 *
 * Las otras propiedades, origen y ubicación, son objetos con una propiedad de nombre para el origen
 * y la ubicación de cada personaje.
 */
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { RandomCharacter } from "./randomcharacters";
import "./App.css";

import { GET_CHARACTERS } from "./helpers";

export function CharacterList() {
  /**
   * La searchTermvariable inicializa el estado de búsqueda en una cadena vacía
   * y crea una función setSearchTermpara actualizar el valor
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * El useQuerygancho de @apollo/clientla biblioteca obtiene datos de la API.
   * La consulta pasa GET_CHARACTERS y una variable llamada searchTermque es una variable para contener
   * los nombres de los personajes que se buscan.
   */
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: searchTerm },
  });

  /**
   * La handleChange variable establece searchTermel valor de al valor actual del campo de entrada.
   * El inputcampo es la barra de búsqueda que el usuario utilizará para buscar los nombres de los personajes que desea ver.
   * El estado es manejado por handleChange.
   */
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search for Rick and Morty characters..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      {
        /**
         * También debemos tener en cuenta los problemas con la carga del sitio, así como cualquier error que pueda ocurrir.
         * loading se representa dinámicamente con un control giratorio si la carga se establece en True.
         * Se muestra un mensaje de error si el error se establece en True.
         * Cuando el usuario está buscando un personaje que no existe, queremos presentar un mensaje y un personaje
         * alternativo sobre el que puedan encontrar más información; aquí es donde entra RandomCharacteren juego.
         */
        loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )
      }

      {error && <p> error </p>}

      {/**
       * Una vez que buscamos los datos, asignamos la data.characters.resultsmatriz a la tarjeta de cada personaje.
       */}
      {data?.characters.results.length === 0 && (
        <>
          {" "}
          <RandomCharacter />{" "}
        </>
      )}

      {/**
       * También queremos cambiar el fondo de las tarjetas para representar el personaje al que pertenece la información.
       * El backgroundImage en la style propiedad maneja el cambio dinámico de las imágenes.
       * El resto de los elementos se muestran como texto en la tarjeta.
       */}

      {data &&
        data.characters.results.map((character) => (
          <div
            className="card"
            key={character.name}
            style={{
              backgroundImage: `url(${character.image})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="info">
              <h2 className="h3"> {character.name}</h2>
              <p> Status: {character.status}</p>
              <p> Species: {character.species} </p>
              <p> Type: {character.type}</p>
              <p> Gender: {character.gender}</p>
              <p> Origin: {character.origin.name}</p>
              <p> Location: {character.location.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
