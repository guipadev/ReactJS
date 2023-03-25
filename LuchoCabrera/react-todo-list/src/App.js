import React, {useState, useEffect} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// Inicializamos valores desde lo más alto para poder compartir la información entre componentes
const initialTodos = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Desc del Todo #1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Desc del Todo #2',
        completed: true
    }
];

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {

    const [todos, setTodos] = useState(localTodos || initialTodos);
    const [todoEdit, setTodoEdit] = useState(null);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    // Recibira todos los elementos pero cambiados
    const todoDelete = (todoId) => {

        if(todoEdit && todoId === todoEdit.id) {
            setTodoEdit(null);
        }

        // Quel todo sea diferente al que se reciba en el argumento
        // Y enviaremos la funcion al componente padre y se pueda utilizar en el componente TodoList
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    // Ser el intermitente del estado entre completado y no completado
    const todoToogleCompleted = (todoId) => {

        // const changedTodos = todos.map(todo => {

        //     const todoEdit = {
        //         ...todo,
        //         completed: !todo.completed
        //     }

        //     if(todo.id === todoId) {
        //         return todoEdit
        //     }

        //     else {
        //         return todo
        //     }

        // })

        // const changedTodos = todos.map(todo => (
        //     todo.id === todoId 
        //     ? {...todo, completed: !todo.completed}
        //     : todo
        // ));

        const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo );

        setTodos(changedTodos);
    }
    
    const todoAdd = (todo) => {

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false

        }

        const changedTodos = [
            newTodo,
            ...todos,
        ]

        setTodos(changedTodos);
    }
    
    const todoUpdate = (todoEdit) => {
        
        const changedTodos = todos.map(todo => (
            todo.id === todoEdit.id
            ? todoEdit
            : todo
        ))

        setTodos(changedTodos);

    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <TodoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
                <div className="col-4">
                    <TodoForm 
                        todoEdit={todoEdit}
                        todoAdd={todoAdd}
                        todoUpdate={todoUpdate}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;