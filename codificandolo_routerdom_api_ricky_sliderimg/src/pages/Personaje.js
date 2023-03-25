import { useEffect, useState } from "react"
// Hook personalizado para recuperar id
import { useParams } from "react-router-dom"
import { unicoPersonaje } from "../funciones/funciones"

export const Personaje = () => {

  const [ personaje, setPersonaje ] = useState(null);

  const {id} = useParams() // Sin destructuración const params = useParams()
  
  useEffect(() => {
    unicoPersonaje(id, setPersonaje)  // Sin destructuración unicoPersonaje(params.id)
  }, [id])
  
  return (
    // Sin destructuración {params.id}
    // Marcaba error en navegador, ya tarda un momento en carga la información por ende se encierra en condicion 
    <>
      {personaje !== null ? (
        <div>
          <h2>La identificación del personaje es #: ${id}</h2>
          <p>El nombre del personaje es: {personaje.name}</p> 
          <img src={personaje.image} alt="img-personaje" />
        </div>
      ): ('No se cargaron personajes')}
    </>
  )
}
