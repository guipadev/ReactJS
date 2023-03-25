import Swal from 'sweetalert2'
import { v4 as uuidv4 } from "uuid"
import { useFormulario } from "../hooks/useFormulario"

const Formulario = ({agregarTodo}) => {

    //Estados inicializados, los nombre concordar con los colocados en el form
    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad: false,
    }

    //Uso Hoocks 
    const [inputs, handleChange, reset] = useFormulario(initialState)

    //Destructuracion
    const { nombre, descripcion, estado, prioridad } = inputs;

    //Activar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!nombre.trim()) {
            e.target[0].focus(); //Capturar en que espacion quedo digitación
            Swal.fire({
                title: 'Error!',
                text: 'No puede dejar nombre en blanco',
                icon: 'error',
              });
              return;
        }
          
        if(!descripcion.trim()) {
            e.target[1].focus(); //Capturar en que espacion quedo digitación
            Swal.fire({
                title: 'Error!',
                text: 'No puede dejar la descripción en blanco',
                icon: 'error',
              });
              return;
        }

        Swal.fire({
            title: 'Éxito!',
            text: 'Tarea agregada',
            icon: 'success',
        });

        agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,
            id: uuidv4() //React siempre necesita un id unico para renderizar
        });

        reset();

        //console.log(todo);
    }

   

    return (
        <>
            <h3>Agregar TODO</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="ingrese todo nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea 
                    className="form-control mb-2"
                    name="descripcion"
                    placeholder="ingrese descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select 
                    name="estado" 
                    className="form-control mb-2"
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>
                <div className="form-check">
                    <input 
                        id="flexCheckDefault" 
                        className="form-check-input" 
                        type="checkbox" 
                        name="prioridad"
                        checked={prioridad} 
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Prioritario
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </form>
        </ >
    )
}

export default Formulario