import { useFormulario } from "../hooks/useFormulario"
import Swal from "sweetalert2"

const Formulario = ({setNombrePersonajes}) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })

    //Destructurando método anterior
    const {nombre} = inputs

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre)

        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba algo por favor',
                icon: 'error'
            })
        }

        setNombrePersonajes(nombre.trim().toLowerCase())

        reset()
    }

    return (
        <form onSubmit = {handleSubmit}>  
            <input
                type = "text"
                placeholder = "Ingrese Personaje"
                className = "form-control mb-2"
                value = {nombre}
                onChange = {handleChange}
                name = "nombre"
            />
            <button 
                className = "btn btn-dark"
                type = "submit"
            >
                Buscar
            </button>
        </form>
    )
}

export default Formulario