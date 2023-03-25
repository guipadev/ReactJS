import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //url = "https://jsonplaceholder.typicode.com/users";
  //console.log(useFetch());

  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h1>Hooks Personalizados</h1>
      <p>Crear Hooks personalizados en React, mejor conocidos como Custom Hooks</p>
      <p>Tener la carpeta hooks, los nombre de los hooks, siempre deben empezar con la palabra <strong>use</strong> y utilizar camelCase</p>
      <p>En este caso vamos a utilizar un hook de consumo de api, useFetch</p>
      <a href="https://es.reactjs.org/docs/hooks-custom.html" Target="_blank">
        Documentación oficial, realizar Hooks, personalizados aquí
      </a>
      <br/>
      <br/>
      <h3>
        {JSON.stringify(isPending)}
      </h3>
      <h3>
        <mark style={{color: "tomato"}}>{JSON.stringify(error)}</mark>
      </h3>
      <pre> {/* style={{ whiteSpace: "pre-wrap" }} */}
        <code> {/* style={{ wordBreak: "break-word" }} */}
          {JSON.stringify(data, undefined, 2)}
        </code>
        {/*
        Estaba solo JSON.stringify(data)
        Pero para pintar un objeto con stringify de forma más bonita hay que pasar dos argumentos más. Undefined y 2. 
        Para que aplique un sangrado de nivel 2. Sería JSON.stringify(data, undefined, 2)
        Sin aplicar CSS. Creo que el parámetro undefined es un callback que puede interceptar el string resultante y transformarlo de alguna manera.
        */}
      </pre>
    </>
  );
}
