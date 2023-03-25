import React, {useState} from "react";

const Formulario = () => {

    const [datos, setDatos] = useState({ //Objetos
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event ) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value //Va guardando los datos digitados de input nombre que tiene relación
        })
    }

    const enviarDatos = (event) =>{ //Capturamos datos del formulario para posterior envio al backend
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }

    return (
        <>
            <h1>Componente Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        name="nombre"
                        placeholder="Ingrese Nombre"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                        name="apellido"
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
            <hr></hr>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </>
    )
}

export default Formulario