import { useState } from "react"

export const ListarDatosConMap = (props) => {
  
  //console.log(props.datos)
  //De esta forma podemos recorrer los datos de una API que recibimos, para luego listar
  const [numeros, setNumeros] = useState([1,2,3,4,5,6])

  return (
    <div>
      <h6>Ejemplo de listado de datos</h6>
      <ul>
        {
          props.datos.map(item => (
            <li key={item.id}>{item.nombre} - {item.edad}</li>
          ))
        }
      </ul>
      <h6>Ejemplo de listado con números</h6>
      <ul>
        {
          numeros.map((item, index) => (
            <li key={index}>
              {item} - {index}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
