/*
Para poder acceder/obtener los datos de la API age-of-empires
debemos instalar en el browser el complemento CORS Unblock :🐞
Activarlo en la página respectiva, ya que por politicas el browser no permite visualizar
*/

import {useState, useEffect} from "react"; 
import { Link } from "react-router-dom"; 

const RouteParametrosApi = () => {

    const [equipo, setEquipo] = useState([])

    //Se invoca de esta manera useEffect ya que puede aparecer, pero se puede llamar desde arriba
    useEffect(() => {
        console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        console.log(users)
        setEquipo(users.civilizations)
     }

    return (
        <div>
            <h1>Civilizaciones</h1>
            <ul>
              {equipo.map((item) => (
                <li key={item.id}>
                  <Link to={`/consumoapiparametro/${item.id}`}>
                    {item.name} - {item.expansion}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      );
}


export default RouteParametrosApi;