import { useState } from "react"
import UserTable from "./UserTable"
import { v4 as uuidv4 } from "uuid"


import AddUserForm from "./AddUserForm"
import EditUserForm from "./EditUserForm"

export default function Crud() {
 
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'wonder' },
    { id: uuidv4(), name: 'Lucia', username: 'capitana' },
    { id: uuidv4(), name: 'Ana', username: 'viuda negra' },
  ]

  // Estado
  const [users, setUsers] = useState(usersData )

  // Agregar Usuario
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar Usuarios
  const deleteUser = (id) => {
    //console.log(id)
    // Si user.id es distinto al id que enviamos guardalo, si no excluirlo
    const arrayFiltrado = users.filter(user => user.id !== id)
    // Ya no tenemos que hacer copia porque ya lo estamos filtrando
    setUsers(arrayFiltrado)
  }

  // Editar Usuarios
  const [editing, setEditing] = useState(false)

  // Modificar Datos
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  // Agregar datos modificados
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, 
      name: user.name,
      username: user.username
    })
  }

  // Actualizar los datos campos
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    // Recorrer usuarios, si id es igual al que estamos pasando mostra actualizado y si no seguir mostrando actual
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className='container'>
      <h1>CRUD App with hooks</h1>
      <div className='flex-row'>

        <div className='flex-large'>
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>

        <div className='flex-large'>
          <h2>View User</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  )
}