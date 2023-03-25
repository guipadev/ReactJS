import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Usuarios = () => {
  
  const [usuarios, setUsuarios] = useState([])

  const ObtenerUsuarios = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsuarios(data.data)
  }

  // Empujar los datos en el estado
  // Este se ejecuta antes del return
  useEffect(() => {
    ObtenerUsuarios()
  }, []) // [] Para el proceso a la primera peticion que hace
  
  return (
    <div>
      <h2>Rutas obteción datos lista usuarios api placeholder</h2>
      <ul>
        {
          usuarios.map(item => ( //<li key={item.id}> {item.name} -- {item.email} </li> 
            <li key={item.id}>
              <Link to={`/especifico/${item.id}`}>
                {item.name} -- {item.email}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}