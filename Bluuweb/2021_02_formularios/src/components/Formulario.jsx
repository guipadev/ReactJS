import { useState } from "react"

const Formulario = () => {
 
    const [todo, setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pediente",
        todoCheck: false,
    })

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(todo)

        //destructuracion
        const {todoName, todoDescripcion} = todo

        if(!todoDescripcion.trim() || !todoName.trim()) {
            setError(true)
            return
        }

        setError(false)
        
        console.log(todo)

        //Verificar si seria buena practica, para volver al estado inicial
        setTodo({
            todoName: "",
            todoDescripcion: "",
            todoEstado: "pediente",
            todoCheck: false,
        })
    }

    const handleChange = (e) => {
        //console.log(e.target.value);
        //console.log(e.target.name);
        //console.log(e.target.type)

        //destructuración
        const {name, value, checked, type} = e.target

        /* 
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        })
        */

        //Otra forma de invocar el setTodo
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    //Esto podria estar en otro componente
    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    )

    return (
        <>
            <h2>Formulario Normal</h2>
            
            { error && <PintarError /> }
            <form onSubmit={handleSubmit}>
                <input 
                    name="todoName"
                    placeholder="Ingrese Todo"
                    type="text"
                    className="form-control mb-2" 
                    onChange={handleChange} //Trae toda la infor del todo, y si la propiedad se actualiza agregarla
                    value={todo.todoName}                    
                />
                <textarea 
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese descripcion del todo"
                    onChange={handleChange} 
                    value={todo.todoDescripcion}  
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    onChange={handleChange} 
                    value={todo.todoEstado}  
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                
                <div className="form-check">
                    <input
                        id="flexCheckDefault"  
                        className="form-check-input" 
                        type="checkbox" 
                        name="todoCheck"
                        onChange={handleChange}
                        checked={todo.todoCheck}                         
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault"
                    >
                            Dar Prioridad
                    </label>
                </div>

                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>   
        </>
    )
}

export default Formulario