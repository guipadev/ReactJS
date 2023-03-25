import { useState } from 'react'
export const Hello = () => {
  
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')

  const validar = (event) => {
    event.preventDefault()
    //console.log('pulsado el boton')
    if(!nombre.trim()){
      alert('nombre esta vacio')
      return
    }
    if(!edad.trim()){
      alert('edad esta vacio')
      return
    }
  }

  //Ejemplo para uso operador propagación
  const array1 = [1,2,3]
  const array2 = [4,5,6]

  const array3 = [...array1, ...array2]
  
  return (
    <div className="container">
      <div>
      <h5>Este es mi primer componente y es un formulario, con validación 🚀</h5>
      <form onSubmit={validar} className="form-group">
        <input 
          placeholder="Introduce el nombre" 
          className="form-control bm-3" 
          type="text" 
          onChange={(e) => {setNombre(e.target.value)}}
        />
        <input 
          placeholder="Introduce la edad" 
          className="form-control bm-3" 
          type="text" 
          onChange={(e) => {setEdad(e.target.value)}}
        />
        <input className="btn btn-info btn-block bm-3" type="submit" />
      </form>
      </div>
      <div>
        <h2>Operador de Propagación</h2>
        <p>Ayuda a unir valores array, objeto ... </p>
        <p>valor A {array1}</p>
        <p>valor B {array2}</p>
        <p>Union de arrays: {array3}</p>
      </div>
    </div>
  )
}
