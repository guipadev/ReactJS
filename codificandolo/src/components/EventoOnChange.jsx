//import React from "react"
import { useState } from "react" 

export const EventoOnChange = () => {

  const [texto, setTexto] = useState('')

  return (
    <>
      <p>{texto}</p>
      <input 
        type='text' 
        placeholder='Introduce Algo' 
        value={texto}
        onChange={(e) => {setTexto(e.target.value)}}        
      />
      {/*
        OnChange
        Cada vez que yo pulse una tecla se va ejecutar una función, en este caso setTexto que modifica el estado
        esta recibe el evento del elemento que se esta pulsando que es un input que corresponde al valor del target.value
        el cual posteriormente es modificado

        EJemplo de uso:
        Se recibe una API de nombre y usuarios, y quiero modificar cierto usuario
        Hago click cambiando los valores del input por los del estado
      */}
    </>
  )
}
