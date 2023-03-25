import axios from "axios";

// Varias funciones que realicen peticiones a la API
// Y luego desde los componentes llamar a esta funciones
// Para no tener toda la logica dentro de los componentes

// Porque si dentro del componente se importa axios, esta la funcion que hace la peticion
// La recuperación de los datos y luego la visualización, así no tiene sentido usar React
// Porque la idea de React es modularizar el código
// En un archivo se tiene las peticiones con la resolución
// En otro archivo tienes la visualización de los datos

const endPoint = "https://rickandmortyapi.com/api/character"

export const todosPersoajes = async (state) => { //En vez dejar vacio recibira un estado
  const peticion = await axios.get(`${endPoint}`)
  //console.log(peticion.data.results)
  state(peticion.data.results) //Aquí se cargan los datos del estado en un componente
}

// recibe id
// guarda lo recibido en state
export const unicoPersonaje = async (id, state) => {
  const peticion = await axios.get(`${endPoint}/${id}`)
  //console.log(peticion.data)
  state(peticion.data)
}

//Validación
export const obtenerMultiplesPersonajes = async (numeros, state) => {
  // 1 Comprobar que es un array
  if(!Array.isArray(numeros)){
    console.log("No es un Array")
    return 
  }
  // Filtrar y devolver un array de solo números
  const numeros_filtrados = numeros.filter(numero => {
    return Number.isInteger(numero)
  })
  //console.log(numeros_filtrados)
  const peticion = await axios.get(`${endPoint}/${numeros_filtrados.toString()}`)
  const data = await peticion.json()
  //console.log(data)
  state(data)
}

obtenerMultiplesPersonajes([1,2,3,'pablo'])

/* VANILLA JAVASCRIPT 

export const obtenerMultiplesPersonajes = async (numeros) => {
  if(!Array.isArray(numeros)){
    console.log("No es un Array")
    return 
  }
  const numeros_filtrados = numeros.filter(numero => {
    return Number.isInteger(numero)
  })
  
  const peticion = await fetch(`https://rickandmortyapi.com/api/character/${numeros_filtrados.toString()}`)
  const data = await peticion.json()
  console.log(data)
}

obtenerMultiplesPersonajes([1,2,3,'5'])
*/