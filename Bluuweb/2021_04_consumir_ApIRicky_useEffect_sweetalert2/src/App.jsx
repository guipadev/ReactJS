import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => { 

    const [nombrePersonaje, setNombrePersonaje] = useState("")

    //Primer efecto validar si existe nombre en el localstorage
    useEffect(() => {
        console.log(localStorage.getItem("nombreApi"))
        if(localStorage.getItem("nombreApi")) {
            setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")))
        }
    }, [])

    //Cada vez que se actualiza el nombre personaje se guarda en el localstorage
    useEffect(() => {
        localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje))
    }, [nombrePersonaje])

    return (
        <div className="container">
            <h1>App Rick and Morty</h1>
            <Formulario setNombrePersonajes={setNombrePersonaje} /> 
            <PintarDatos nombrePersonaje={nombrePersonaje} />
        </div>
    )
}

export default App