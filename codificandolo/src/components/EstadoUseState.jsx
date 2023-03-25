import { useState } from 'react'

export const EstadoUseState = () => {
  
  //Nombre variable y Nombre Funcion que modifica la variable y useState debe tener un valor inicial
  const [valor, setValor] = useState(0)
  const [texto, setTexto] = useState('Texto Inical')

  const aumentar = () => {
    setValor(valor + 1)
    setTexto('Soy un nuevo texto')
  }

  const disminuir = () => {
    setValor(valor - 1)
  }
  
  return (
    <>
      <h6>Ejemplo del contado con useState</h6>
      <p>El valor del dato o contador es: {valor}</p>
      <p>{texto}</p>
      <button className='btn btn-primary' onClick={aumentar}>AUMENTAR</button> 
      <button className='btn btn-danger' onClick={disminuir}>DISMINUIR</button>
    </>
  )
}
