import React from "react";
import { useRef } from "react";

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault();
        //console.log("procesando....")

        //Obtendremos sin validar que podemos enviar a un servidor etc..
        const datos = new FormData(formulario.current)
        //console.log(...datos.entries()) //entries devuelve llave y valor
        //convertir los datos a un objeto
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos) 

        //Destructurando el objeto
        const {todoDescripcion, todoName} = objetoDatos
        //Realizar validaciones
        if(!todoDescripcion.trim() || !todoName.trim()){
            console.log("no puede estar vacio")
            return
        }
        console.log("paso validaciones")
 
    }

    return ( 
        <> {/* Uso del fragment */}
            <h2>No Controlado</h2>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input 
                    name="todoName"
                    placeholder="Ingrese Todo"
                    type="text"
                    className="form-control mb-2" 
                    defaultValue="Tarea #01"
                />
                <textarea 
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese descripcion del todo"
                    defaultValue="Descripcion Tarea #01"
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    defaultValue="pendiente"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button className="btn btn-primary">Agregar</button>
            </form>
        </>
     );
}
 
export default FormNoControlado;