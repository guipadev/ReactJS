import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo";

const TodoList = () => {

    const [todos, setTodos] = useState([]); //Estado donde estaran todos los objetos

    //Los [] vacios para que solo se renderice una vez y trae los datos LocalStorage almacenados
    useEffect(() => {
        if (localStorage.getItem("todos")){
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);

    //Cada vez que se guardo o modificar un elemento Guardar datos localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const agregarTodo = (todo) => {
        console.log(todo)
        setTodos((old) => [...old, todo]); //capturar todos los objetos
    };

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    const editarTodo = (id) => {
        
        const editarTodos = todos.map(item => (
            item.id === id ? {...item, estado: !item.estado} : item
        ))

        setTodos(editarTodos)
    }

    return (
        <>
            <Formulario agregarTodo={agregarTodo} />
            <ul className="list-group list-group-numbered mt-2">
                {
                    todos.map((item) => (
                        <
                            Todo key={item.id} 
                            todo={item} 
                            eliminarTodo={eliminarTodo} 
                            editarTodo={editarTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList