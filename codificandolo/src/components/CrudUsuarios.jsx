import { useState } from "react"

export const CrudUsuarios = () => {
  
  // Campos
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  // Guardar valor de campos
  const [lista, setLista] = useState([])
  // Constante mostrar fallo
  const [fallo, setFallo] = useState(false)
  // Constante captura error
  const [error, setError] = useState('')
  // Espacio para editar campos
  const [modoEdicion, setModoEdicion] = useState(false)

  const agregarUsuario = (e) => {
    e.preventDefault()
    //Validar campos antes de enviar datos
    if(!nombre.trim()){
      setFallo(true)
      setError('Lo siento introducce un nombre')
      return
    }
    if(!edad.trim()){
      setFallo(true)
      setError('Lo siento introducce una edad')
      return
    }

    // Creamos un objeto con los datos recogidos
    const usuario = {
      nombre,
      edad
    }
    //Agregar datos de este objeto a lista
    //Hace una copia de lista y agregar todo lo que traiga usuario
    setLista([...lista, usuario])
    //Después de enviar datos se limpien campos
    setNombre('')
    setEdad('')
    //Si todos los datos estan bien el fallo seria true
    setFallo(false)
  }

  const borrarUsuario = (nombre) => {
    //Realmente no borrara, crear un nuevo objeto/lista filtrada y quitamos el que no nos interesa
    //la lista original se conserva y solo mostramo una nueva lista con los datos que queremos
    const filtro = lista.filter( item => item.nombre !== nombre)
    setLista(filtro)
  }

  // Pasamos la información del objeto a los campos
  const primeraEdicion = (objeto) => {
    setNombre(objeto.nombre)
    setEdad(objeto.edad)
    setModoEdicion(true)
  }

  const edicionFinal = (e) => {
    e.preventDefault()
    //Entra a lista, lo mapea, crea un nuevo objeto item x c/u de los objetos filtrados
    //Comprueba nombre es =  nombre recibido, si entonces cambias nombre y edad con nuevos datos, NO regresas el item que ya tenias y no modificas nada
    const editado = lista.map(item => item.nombre === nombre ? {nombre, edad} : item)
    setLista(editado) //Lista completa editada
    setModoEdicion(false)
    setNombre('')
    setEdad('')
  }

  return (
    <div className="row">
      <div className="col-5">
         <h2>Listado de Usuarios</h2>
         <hr/>
         <ul className="list-group">
          {
            lista.map( indice => (
              <li className="list-group-item">Se llama {indice.nombre} con {indice.edad} años
                <button 
                  className="btn tbn-sm btn-primary ml-2 float-right"
                  onClick={() => {primeraEdicion(indice)}}
                >
                  EDITAR
                </button>
                <button 
                  className="btn tbn-sm btn-primary float-right"
                  onClick={() => {borrarUsuario(indice.nombre)}}
                >
                  BORRAR
                </button>
              </li>
            ))
          }
           {/*
             <li className="list-group-item">
            DATOS INTRODUCIDOS
            <button className="btn tbn-sm btn-primary ml-2 float-right">EDITAR</button>
            <button className="btn tbn-sm btn-primary float-right">BORRAR</button>
           </li>
           */}
         </ul>
      </div>
      <div className="col-7">
        <h2>Formulario de Usuarios</h2>
        <hr/>
        <form className="form-group">
          <input 
            className="form-control mb-2" 
            type="text" 
            placeholder="Introduce nombre" 
            onChange={(e) => {setNombre(e.target.value)}}
            value={nombre}
          />
          <input 
            className="form-control mb-2" 
            type="text" 
            placeholder="Introduce edad" 
            onChange={(e) => {setEdad(e.target.value)}}
            value={edad}
          />
          {
            fallo ? (
              <span style={{color: 'red'}}>{error}</span>
            ) : (
              <span></span>
            )
          }
          <br/>
          {
            modoEdicion ? (
              <button 
                className="btn btn-info btn-block" 
                type="submit"
                onClick={(e) => {edicionFinal(e)}}
              >
                EDITAR
              </button>
            ) : (
              <button 
                className="btn btn-info btn-block" 
                type="submit"
                onClick={(e) => {agregarUsuario(e)}}
              >
                AGREGAR
              </button>
            )
          }
        </form>
      </div>
    </div>
  )
}
