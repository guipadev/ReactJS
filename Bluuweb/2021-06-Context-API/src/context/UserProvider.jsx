import React, { createContext, useState } from 'react'

//crecion Context el cual si o si debe llamarse UserContext
export const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(false)

    //Ejemplo iniciar sesión
    const signIn = () => setUser(true)
    const signOut = () => setUser(false)

    //Se envuelve en Provider para mostrar elementos, pero solo se utiliza aqui
    return (
        <UserContext.Provider value={{user, signIn, signOut}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
