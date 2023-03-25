import axios from "axios"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Especifico = () => {
  // Este Hook useParams recoge esta id
  const {id} = useParams()

  //Como se recibe un objeto y un solo usuario, no hay necesidad de utilizar un array
  const [especifico, setEspecifico] = useState({})

  const obtenerUsuario = async() => {
    const datos = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setEspecifico(datos.data)
  }

  useEffect(() => {
    obtenerUsuario()
  }, []) // [] Para el proceso a la primera peticion que hace

  return (
    <div>
      <p>El nombre es {especifico.name}</p> 
    </div>
  )
}